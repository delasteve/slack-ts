// This file is auto-generated.

import { StaticBotsInfoParameters } from './parameters';
import { BotsInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about a bot user.
 */
export function botsInfo(args: StaticBotsInfoParameters): Promise<BotsInfoResponse> {
  return got
    .post('https://slack.com/api/bots.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
