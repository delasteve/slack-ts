// This file is auto-generated.

import { StaticApiTestParameters } from './parameters';
import { ApiTestResponse } from './response';
import * as got from 'got';

/**
 * Checks API calling code.
 */
export function apiTest(args: StaticApiTestParameters): Promise<ApiTestResponse> {
  return got
    .post('https://slack.com/api/api.test', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
