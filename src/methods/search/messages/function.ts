// This file is auto-generated.

import { StaticSearchMessagesParameters } from './parameters';
import { SearchMessagesResponse } from './response';
import * as got from 'got';

/**
 * Searches for messages matching a query.
 */
export function searchMessages(args: StaticSearchMessagesParameters): Promise<SearchMessagesResponse> {
  return got
    .post('https://slack.com/api/search.messages', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
