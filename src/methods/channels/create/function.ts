// This file is auto-generated.

import { StaticChannelsCreateParameters } from './parameters';
import { ChannelsCreateResponse } from './response';
import * as got from 'got';

/**
 * Creates a channel.
 */
export function channelsCreate(args: StaticChannelsCreateParameters): Promise<ChannelsCreateResponse> {
  return got
    .post('https://slack.com/api/channels.create', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
