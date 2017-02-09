// This file is auto-generated.

import { StaticRtmStartParameters } from './parameters';
import { RtmStartResponse } from './response';
import * as got from 'got';

/**
 * Starts a Real Time Messaging session.
 */
export function rtmStart(args: StaticRtmStartParameters): Promise<RtmStartResponse> {
  return got
    .post('https://slack.com/api/rtm.start', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
