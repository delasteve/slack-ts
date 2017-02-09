// This file is auto-generated.

import { StaticImOpenParameters } from './parameters';
import { ImOpenResponse } from './response';
import * as got from 'got';

/**
 * Opens a direct message channel.
 */
export function imOpen(args: StaticImOpenParameters): Promise<ImOpenResponse> {
  return got
    .post('https://slack.com/api/im.open', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
