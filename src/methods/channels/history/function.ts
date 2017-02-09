// This file is auto-generated.

import { StaticChannelsHistoryParameters } from './parameters';
import { ChannelsHistoryResponse } from './response';
import * as got from 'got';

/**
 * Fetches history of messages and events from a channel.
 */
export function channelsHistory(args: StaticChannelsHistoryParameters): Promise<ChannelsHistoryResponse> {
  return got
    .post('https://slack.com/api/channels.history', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
