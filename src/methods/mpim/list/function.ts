// This file is auto-generated.

import { StaticMpimListParameters } from './parameters';
import { MpimListResponse } from './response';
import * as got from 'got';

/**
 * Lists multiparty direct message channels for the calling user.
 */
export function mpimList(args: StaticMpimListParameters): Promise<MpimListResponse> {
  return got
    .post('https://slack.com/api/mpim.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
