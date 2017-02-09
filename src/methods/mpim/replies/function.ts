// This file is auto-generated.

import { StaticMpimRepliesParameters } from './parameters';
import { MpimRepliesResponse } from './response';
import * as got from 'got';

/**
 * Retrieve a thread of messages posted to a direct message conversation from a multiparty direct message.
 */
export function mpimReplies(args: StaticMpimRepliesParameters): Promise<MpimRepliesResponse> {
  return got
    .post('https://slack.com/api/mpim.replies', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
