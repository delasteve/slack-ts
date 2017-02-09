// This file is auto-generated.

import { StaticStarsRemoveParameters } from './parameters';
import { StarsRemoveResponse } from './response';
import * as got from 'got';

/**
 * Removes a star from an item.
 */
export function starsRemove(args: StaticStarsRemoveParameters): Promise<StarsRemoveResponse> {
  return got
    .post('https://slack.com/api/stars.remove', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
