// This file is auto-generated.

import { StaticImRepliesParameters } from './parameters';
import { ImRepliesResponse } from './response';
import * as got from 'got';

/**
 * Retrieve a thread of messages posted to a direct message conversation
 */
export function imReplies(args: StaticImRepliesParameters): Promise<ImRepliesResponse> {
  return got
    .post('https://slack.com/api/im.replies', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
