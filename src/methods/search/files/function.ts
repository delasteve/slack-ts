// This file is auto-generated.

import { StaticSearchFilesParameters } from './parameters';
import { SearchFilesResponse } from './response';
import * as got from 'got';

/**
 * Searches for files matching a query.
 */
export function searchFiles(args: StaticSearchFilesParameters): Promise<SearchFilesResponse> {
  return got
    .post('https://slack.com/api/search.files', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
