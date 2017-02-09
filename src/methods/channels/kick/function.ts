// This file is auto-generated.

import { StaticChannelsKickParameters } from './parameters';
import { ChannelsKickResponse } from './response';
import * as got from 'got';

/**
 * Removes a user from a channel.
 */
export function channelsKick(args: StaticChannelsKickParameters): Promise<ChannelsKickResponse> {
  return got
    .post('https://slack.com/api/channels.kick', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
