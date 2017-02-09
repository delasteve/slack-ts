// This file is auto-generated.

import { StaticChannelsListParameters } from './parameters';
import { ChannelsListResponse } from './response';
import * as got from 'got';

/**
 * Lists all channels in a Slack team.
 */
export function channelsList(args: StaticChannelsListParameters): Promise<ChannelsListResponse> {
  return got
    .post('https://slack.com/api/channels.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
