// This file is auto-generated.

import { StaticChannelsRenameParameters } from './parameters';
import { ChannelsRenameResponse } from './response';
import * as got from 'got';

/**
 * Renames a channel.
 */
export function channelsRename(args: StaticChannelsRenameParameters): Promise<ChannelsRenameResponse> {
  return got
    .post('https://slack.com/api/channels.rename', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
