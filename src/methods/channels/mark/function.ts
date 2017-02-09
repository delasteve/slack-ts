// This file is auto-generated.

import { StaticChannelsMarkParameters } from './parameters';
import { ChannelsMarkResponse } from './response';
import * as got from 'got';

/**
 * Sets the read cursor in a channel.
 */
export function channelsMark(args: StaticChannelsMarkParameters): Promise<ChannelsMarkResponse> {
  return got
    .post('https://slack.com/api/channels.mark', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
