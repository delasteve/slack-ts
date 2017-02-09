// This file is auto-generated.

import { StaticChannelsArchiveParameters } from './parameters';
import { ChannelsArchiveResponse } from './response';
import * as got from 'got';

/**
 * Archives a channel.
 */
export function channelsArchive(args: StaticChannelsArchiveParameters): Promise<ChannelsArchiveResponse> {
  return got
    .post('https://slack.com/api/channels.archive', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
