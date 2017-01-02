import { Endpoint } from './interfaces/endpoint';
import { Parameter } from './interfaces/parameter';
import * as Handlebars from 'handlebars';
import * as mkdirp from 'mkdirp';
import * as changeCase from 'change-case';
import * as fs from 'fs';
import * as path from 'path';

export default function buildFiles(endpoints: Endpoint[]) {
  endpoints.forEach((endpoint: Endpoint) => {
    const splitApiUrl = endpoint.url.split('.');
    const folderPath = path.join(__dirname, '..', 'src', 'methods', ...splitApiUrl);

    mkdirp.sync(folderPath);

    registerTemplateHelpers();

    writeIndexFile(folderPath);
    writeFunctionFile(folderPath, endpoint);
    writeParametersFile(folderPath, endpoint);
    writeResponseFileIfDoesNotExist(folderPath, endpoint);
  });
}

function registerTemplateHelpers() {
  Handlebars.registerHelper('param', (parameter: string, required: boolean) => {
    if (parameter === 'token') {
      return 'token?';
    }
    const optional = required ? '' : '?';
    return `${parameter}${optional}`;
  });
}

function writeIndexFile(folderPath: string) {
  const fileContents = buildFileFromTemplate('index');

  fs.writeFile(path.join(folderPath, 'index.ts'), fileContents);
}

function writeFunctionFile(folderPath: string, endpoint: Endpoint) {
  const camelCaseEndpoint = changeCase.camelCase(endpoint.url.replace('.', ' '));
  const pascalCaseEndpoint = changeCase.pascalCase(endpoint.url.replace('.', ' '));
  const fileContents = buildFileFromTemplate('function', { camelCaseEndpoint, pascalCaseEndpoint, endpoint });

  fs.writeFile(path.join(folderPath, 'function.ts'), fileContents);
}

function writeResponseFileIfDoesNotExist(folderPath: string, endpoint: Endpoint) {
  const pascalCaseEndpoint = changeCase.pascalCase(endpoint.url.replace('.', ' '));
  const fileContents = buildFileFromTemplate('response', { pascalCaseEndpoint });

  if (!fs.existsSync(path.join(folderPath, 'response.ts'))) {
    fs.writeFile(path.join(folderPath, 'response.ts'), fileContents);
  }
}

function writeParametersFile(folderPath: string, endpoint: Endpoint) {
  const pascalCaseEndpoint = changeCase.pascalCase(endpoint.url.replace('.', ' '));
  const fileContents = buildFileFromTemplate('parameters', { pascalCaseEndpoint, endpoint });

  fs.writeFile(path.join(folderPath, 'parameters.ts'), fileContents);
}

function buildFileFromTemplate(templateName: string, data: Object = {}): string {
  const templateSource = fs.readFileSync(path.join(__dirname, 'templates', `${templateName}.hbs`), 'utf-8');
  const template = Handlebars.compile(templateSource, { noEscape: true });

  return template(data);
}
