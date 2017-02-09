// This file is auto-generated.

import { StaticChannelsInviteParameters } from './parameters';
import { ChannelsInviteResponse } from './response';
import * as got from 'got';

/**
 * Invites a user to a channel.
 */
export function channelsInvite(args: StaticChannelsInviteParameters): Promise<ChannelsInviteResponse> {
  return got
    .post('https://slack.com/api/channels.invite', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
