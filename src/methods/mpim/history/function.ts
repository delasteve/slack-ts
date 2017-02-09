// This file is auto-generated.

import { StaticMpimHistoryParameters } from './parameters';
import { MpimHistoryResponse } from './response';
import * as got from 'got';

/**
 * Fetches history of messages and events from a multiparty direct message.
 */
export function mpimHistory(args: StaticMpimHistoryParameters): Promise<MpimHistoryResponse> {
  return got
    .post('https://slack.com/api/mpim.history', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
