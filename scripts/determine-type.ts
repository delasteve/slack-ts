export default function determineType(argument, exampleParameter, requiredText, description, endpointUrl) {
  if (isBoolean(exampleParameter)) { return 'boolean'; }
  if (isTimestampOrNow(exampleParameter, requiredText)) { return `number | 'now'`; }
  if (isFileType(argument, endpointUrl)) { return generateAllSubsets(); }
  if (isNumber(exampleParameter)) { return 'number'; }

  return 'string';
}

function isBoolean(exampleParameter): boolean {
  return exampleParameter === 'true' || exampleParameter === 'false' || exampleParameter === '1';
}

function isTimestampOrNow(exampleParameter, requiredText): boolean {
  return /^\d+\.\d+$/.test(exampleParameter) && /default=now/.test(requiredText);
}

function isFileType(argument, endpointUrl) {
  return endpointUrl === 'files.list' && /types/.test(argument);
}

function generateAllSubsets(): string {
  return 'string';
  // return `'all' | 'spaces' | 'snippets' | 'images' | 'gdocs' | 'zips' | 'pdfs' | 'spaces,snippets' | 'spaces,images' | 'spaces,gdocs' | 'spaces,zips' | 'spaces,pdfs' | 'snippets,images' | 'snippets,gdocs' | 'snippets,zips' | 'snippets,pdfs' | 'images,gdocs' | 'images,zips' | 'images,pdfs' | 'gdocs,zips' | 'gdocs,pdfs' | 'zips,pdfs' | 'spaces,snippets,images' | 'spaces,snippets,gdocs' | 'spaces,snippets,zips' | 'spaces,snippets,pdfs' | 'spaces,images,gdocs' | 'spaces,images,zips' | 'spaces,images,pdfs' | 'spaces,gdocs,zips' | 'spaces,gdocs,pdfs' | 'spaces,zips,pdfs' | 'snippets,images,gdocs' | 'snippets,images,zips' | 'snippets,images,pdfs' | 'snippets,gdocs,zips' | 'snippets,gdocs,pdfs' | 'snippets,zips,pdfs' | 'images,gdocs,zips' | 'images,gdocs,pdfs' | 'images,zips,pdfs' | 'gdocs,zips,pdfs' | 'spaces,snippets,images,gdocs' | 'spaces,snippets,images,zips' | 'spaces,snippets,images,pdfs' | 'spaces,snippets,gdocs,zips' | 'spaces,snippets,gdocs,pdfs' | 'spaces,snippets,zips,pdfs' | 'spaces,images,gdocs,zips' | 'spaces,images,gdocs,pdfs' | 'spaces,images,zips,pdfs' | 'spaces,gdocs,zips,pdfs' | 'snippets,images,gdocs,zips' | 'snippets,images,gdocs,pdfs' | 'snippets,images,zips,pdfs' | 'snippets,gdocs,zips,pdfs' | 'images,gdocs,zips,pdfs' | 'spaces,snippets,images,gdocs,zips' | 'spaces,snippets,images,gdocs,pdfs' | 'spaces,snippets,images,zips,pdfs' | 'spaces,snippets,gdocs,zips,pdfs' | 'spaces,images,gdocs,zips,pdfs' | 'snippets,images,gdocs,zips,pdfs' | 'spaces,snippets,images,gdocs,zips,pdfs'`;
}

function isNumber(exampleParameter) {
  return /^\d+\.\d+$/.test(exampleParameter) || /^\d+$/.test(exampleParameter);
}
