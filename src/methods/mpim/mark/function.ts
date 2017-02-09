// This file is auto-generated.

import { StaticMpimMarkParameters } from './parameters';
import { MpimMarkResponse } from './response';
import * as got from 'got';

/**
 * Sets the read cursor in a multiparty direct message channel.
 */
export function mpimMark(args: StaticMpimMarkParameters): Promise<MpimMarkResponse> {
  return got
    .post('https://slack.com/api/mpim.mark', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
