// This file is auto-generated.

import { StaticChatPostMessageParameters } from './parameters';
import { ChatPostMessageResponse } from './response';
import * as got from 'got';

/**
 * Sends a message to a channel.
 */
export function chatPostMessage(args: StaticChatPostMessageParameters): Promise<ChatPostMessageResponse> {
  return got
    .post('https://slack.com/api/chat.postMessage', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
