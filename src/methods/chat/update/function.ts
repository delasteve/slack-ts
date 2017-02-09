// This file is auto-generated.

import { StaticChatUpdateParameters } from './parameters';
import { ChatUpdateResponse } from './response';
import * as got from 'got';

/**
 * Updates a message.
 */
export function chatUpdate(args: StaticChatUpdateParameters): Promise<ChatUpdateResponse> {
  return got
    .post('https://slack.com/api/chat.update', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
