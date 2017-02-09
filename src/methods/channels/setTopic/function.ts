// This file is auto-generated.

import { StaticChannelsSetTopicParameters } from './parameters';
import { ChannelsSetTopicResponse } from './response';
import * as got from 'got';

/**
 * Sets the topic for a channel.
 */
export function channelsSetTopic(args: StaticChannelsSetTopicParameters): Promise<ChannelsSetTopicResponse> {
  return got
    .post('https://slack.com/api/channels.setTopic', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
