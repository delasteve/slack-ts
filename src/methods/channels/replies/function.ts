// This file is auto-generated.

import { StaticChannelsRepliesParameters } from './parameters';
import { ChannelsRepliesResponse } from './response';
import * as got from 'got';

/**
 * Retrieve a thread of messages posted to a channel
 */
export function channelsReplies(args: StaticChannelsRepliesParameters): Promise<ChannelsRepliesResponse> {
  return got
    .post('https://slack.com/api/channels.replies', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
