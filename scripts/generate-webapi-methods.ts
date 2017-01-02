import * as cheerio from 'cheerio';
import * as got from 'got';
import { Endpoint } from './interfaces/endpoint';
import { Parameter } from './interfaces/parameter';
import determineType from './determine-type';
import buildEndpointFiles from './generate-endpoint-files';

async function buildWebApiEndpoint() {
  try {
    const result = await got('https://api.slack.com/methods');
    const endpoints: Endpoint[] = await getEndpointsAndDescriptions(result);
    const endpointWithParameters: Endpoint[] = await getEndpointParameters(endpoints);

    buildEndpointFiles(endpointWithParameters);
  } catch (e) {
    console.log(e);
  }
}

function getEndpointsAndDescriptions(response: any): Endpoint[] {
  const $ = cheerio.load(response.body);
  const rows = $('#api_main_content table tr').slice(1);

  return rows.map((index, row) => {
    if ($(row.children[1]).text() === 'Method') { return; }

    const endpoint: Endpoint = {
      url: $(row.children[1]).text(),
      description: $(row.children[3]).text()
    };

    return endpoint;
  }).get() as any as Endpoint[];
}

// TODO: Clean up
function getEndpointParameters(endpoints: Endpoint[]) {
  const promises = [];

  endpoints.forEach((endpoint) => {
    const promise = got(`https://api.slack.com/methods/${endpoint.url}`)
      .then((response) => {
        const $ = cheerio.load(response.body);
        const args = $('.arguments.full_width').first().children('tr').slice(1);
        const params: Parameter[] = args.map((index: number, element: CheerioElement) => {
          const columns = $(element).children('td');
          let parameter = $(columns[0]).text();
          const exampleParameter = $(columns.get(1)).text();
          const requiredText = $(columns.get(2)).text();
          let required = $(columns.get(2)).text() === 'Required';
          const description = formatDescription($(columns.get(3)).text(), endpoint);
          let type = determineType(parameter, exampleParameter, requiredText, description, endpoint.url);

          if (endpoint.url === 'api.test' && parameter === 'foo') {
            parameter = '[propName: string]';
            type = 'any';
            required = true;
          }

          return {
            parameter,
            type,
            required,
            description
          };
        }).get() as any as Parameter[];

        endpoint.parameters = params;
        return endpoint;
      });

    promises.push(promise);
  });

  return Promise.all(promises);
}

function formatDescription(description: string, endpoint: Endpoint) {
  return description
    .replace(/\n{3,}/g, '\n\n')
    .replace('See below.', '')
    .trim()
    .split('\n')
    .map((str) => {
      if (str.includes('-') && endpoint.url === 'files.list') {
        const replacedString = str.replace(/(\w+) - (\w+)/g, `"$1" - $2`);
        return `- ${replacedString}`;
      }

      return str;
    })
    .map((str) => {
      if (str.match(/\w+\.\w+/g) && endpoint.url === 'files.list') {
        return str.replace(/(\w+)\.(\w+)/g, '$1. $2');
      }

      return str;
    });
}

buildWebApiEndpoint();
