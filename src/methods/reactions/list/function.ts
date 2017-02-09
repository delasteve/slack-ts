// This file is auto-generated.

import { StaticReactionsListParameters } from './parameters';
import { ReactionsListResponse } from './response';
import * as got from 'got';

/**
 * Lists reactions made by a user.
 */
export function reactionsList(args: StaticReactionsListParameters): Promise<ReactionsListResponse> {
  return got
    .post('https://slack.com/api/reactions.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
