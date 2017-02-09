// This file is auto-generated.

import { StaticChannelsUnarchiveParameters } from './parameters';
import { ChannelsUnarchiveResponse } from './response';
import * as got from 'got';

/**
 * Unarchives a channel.
 */
export function channelsUnarchive(args: StaticChannelsUnarchiveParameters): Promise<ChannelsUnarchiveResponse> {
  return got
    .post('https://slack.com/api/channels.unarchive', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
