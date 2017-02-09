// This file is auto-generated.

import { StaticAuthTestParameters } from './parameters';
import { AuthTestResponse } from './response';
import * as got from 'got';

/**
 * Checks authentication & identity.
 */
export function authTest(args: StaticAuthTestParameters): Promise<AuthTestResponse> {
  return got
    .post('https://slack.com/api/auth.test', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
