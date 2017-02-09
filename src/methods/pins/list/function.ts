// This file is auto-generated.

import { StaticPinsListParameters } from './parameters';
import { PinsListResponse } from './response';
import * as got from 'got';

/**
 * Lists items pinned to a channel.
 */
export function pinsList(args: StaticPinsListParameters): Promise<PinsListResponse> {
  return got
    .post('https://slack.com/api/pins.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
