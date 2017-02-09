// This file is auto-generated.

import { StaticImCloseParameters } from './parameters';
import { ImCloseResponse } from './response';
import * as got from 'got';

/**
 * Close a direct message channel.
 */
export function imClose(args: StaticImCloseParameters): Promise<ImCloseResponse> {
  return got
    .post('https://slack.com/api/im.close', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
