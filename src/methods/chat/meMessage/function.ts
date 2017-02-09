// This file is auto-generated.

import { StaticChatMeMessageParameters } from './parameters';
import { ChatMeMessageResponse } from './response';
import * as got from 'got';

/**
 * Share a me message into a channel.
 */
export function chatMeMessage(args: StaticChatMeMessageParameters): Promise<ChatMeMessageResponse> {
  return got
    .post('https://slack.com/api/chat.meMessage', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
