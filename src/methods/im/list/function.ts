// This file is auto-generated.

import { StaticImListParameters } from './parameters';
import { ImListResponse } from './response';
import * as got from 'got';

/**
 * Lists direct message channels for the calling user.
 */
export function imList(args: StaticImListParameters): Promise<ImListResponse> {
  return got
    .post('https://slack.com/api/im.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
