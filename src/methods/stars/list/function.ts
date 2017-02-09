// This file is auto-generated.

import { StaticStarsListParameters } from './parameters';
import { StarsListResponse } from './response';
import * as got from 'got';

/**
 * Lists stars for a user.
 */
export function starsList(args: StaticStarsListParameters): Promise<StarsListResponse> {
  return got
    .post('https://slack.com/api/stars.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
