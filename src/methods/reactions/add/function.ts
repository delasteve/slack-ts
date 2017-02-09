// This file is auto-generated.

import { StaticReactionsAddParameters } from './parameters';
import { ReactionsAddResponse } from './response';
import * as got from 'got';

/**
 * Adds a reaction to an item.
 */
export function reactionsAdd(args: StaticReactionsAddParameters): Promise<ReactionsAddResponse> {
  return got
    .post('https://slack.com/api/reactions.add', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
