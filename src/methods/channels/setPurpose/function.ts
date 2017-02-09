// This file is auto-generated.

import { StaticChannelsSetPurposeParameters } from './parameters';
import { ChannelsSetPurposeResponse } from './response';
import * as got from 'got';

/**
 * Sets the purpose for a channel.
 */
export function channelsSetPurpose(args: StaticChannelsSetPurposeParameters): Promise<ChannelsSetPurposeResponse> {
  return got
    .post('https://slack.com/api/channels.setPurpose', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
