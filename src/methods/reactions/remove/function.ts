// This file is auto-generated.

import { StaticReactionsRemoveParameters } from './parameters';
import { ReactionsRemoveResponse } from './response';
import * as got from 'got';

/**
 * Removes a reaction from an item.
 */
export function reactionsRemove(args: StaticReactionsRemoveParameters): Promise<ReactionsRemoveResponse> {
  return got
    .post('https://slack.com/api/reactions.remove', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
