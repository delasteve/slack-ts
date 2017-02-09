// This file is auto-generated.

import { StaticChatDeleteParameters } from './parameters';
import { ChatDeleteResponse } from './response';
import * as got from 'got';

/**
 * Deletes a message.
 */
export function chatDelete(args: StaticChatDeleteParameters): Promise<ChatDeleteResponse> {
  return got
    .post('https://slack.com/api/chat.delete', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
