// This file is auto-generated.

import { StaticChannelsJoinParameters } from './parameters';
import { ChannelsJoinResponse } from './response';
import * as got from 'got';

/**
 * Joins a channel, creating it if needed.
 */
export function channelsJoin(args: StaticChannelsJoinParameters): Promise<ChannelsJoinResponse> {
  return got
    .post('https://slack.com/api/channels.join', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
