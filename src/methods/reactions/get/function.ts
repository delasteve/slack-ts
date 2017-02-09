// This file is auto-generated.

import { StaticReactionsGetParameters } from './parameters';
import { ReactionsGetResponse } from './response';
import * as got from 'got';

/**
 * Gets reactions for an item.
 */
export function reactionsGet(args: StaticReactionsGetParameters): Promise<ReactionsGetResponse> {
  return got
    .post('https://slack.com/api/reactions.get', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
