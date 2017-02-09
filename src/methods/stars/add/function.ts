// This file is auto-generated.

import { StaticStarsAddParameters } from './parameters';
import { StarsAddResponse } from './response';
import * as got from 'got';

/**
 * Adds a star to an item.
 */
export function starsAdd(args: StaticStarsAddParameters): Promise<StarsAddResponse> {
  return got
    .post('https://slack.com/api/stars.add', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
