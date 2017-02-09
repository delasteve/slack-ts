// This file is auto-generated.

import { StaticChannelsInfoParameters } from './parameters';
import { ChannelsInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about a channel.
 */
export function channelsInfo(args: StaticChannelsInfoParameters): Promise<ChannelsInfoResponse> {
  return got
    .post('https://slack.com/api/channels.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
