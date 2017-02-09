// This file is auto-generated.

import { StaticMpimCloseParameters } from './parameters';
import { MpimCloseResponse } from './response';
import * as got from 'got';

/**
 * Closes a multiparty direct message channel.
 */
export function mpimClose(args: StaticMpimCloseParameters): Promise<MpimCloseResponse> {
  return got
    .post('https://slack.com/api/mpim.close', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
