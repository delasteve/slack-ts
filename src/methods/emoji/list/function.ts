// This file is auto-generated.

import { StaticEmojiListParameters } from './parameters';
import { EmojiListResponse } from './response';
import * as got from 'got';

/**
 * Lists custom emoji for a team.
 */
export function emojiList(args: StaticEmojiListParameters): Promise<EmojiListResponse> {
  return got
    .post('https://slack.com/api/emoji.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
