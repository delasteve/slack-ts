// This file is auto-generated.

import { StaticSearchAllParameters } from './parameters';
import { SearchAllResponse } from './response';
import * as got from 'got';

/**
 * Searches for messages and files matching a query.
 */
export function searchAll(args: StaticSearchAllParameters): Promise<SearchAllResponse> {
  return got
    .post('https://slack.com/api/search.all', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
