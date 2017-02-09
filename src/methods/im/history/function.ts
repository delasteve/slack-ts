// This file is auto-generated.

import { StaticImHistoryParameters } from './parameters';
import { ImHistoryResponse } from './response';
import * as got from 'got';

/**
 * Fetches history of messages and events from direct message channel.
 */
export function imHistory(args: StaticImHistoryParameters): Promise<ImHistoryResponse> {
  return got
    .post('https://slack.com/api/im.history', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
