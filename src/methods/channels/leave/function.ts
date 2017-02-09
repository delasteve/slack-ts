// This file is auto-generated.

import { StaticChannelsLeaveParameters } from './parameters';
import { ChannelsLeaveResponse } from './response';
import * as got from 'got';

/**
 * Leaves a channel.
 */
export function channelsLeave(args: StaticChannelsLeaveParameters): Promise<ChannelsLeaveResponse> {
  return got
    .post('https://slack.com/api/channels.leave', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
