// This file is auto-generated.

import { StaticMpimOpenParameters } from './parameters';
import { MpimOpenResponse } from './response';
import * as got from 'got';

/**
 * This method opens a multiparty direct message.
 */
export function mpimOpen(args: StaticMpimOpenParameters): Promise<MpimOpenResponse> {
  return got
    .post('https://slack.com/api/mpim.open', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
