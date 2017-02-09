// This file is auto-generated.

import { StaticAuthRevokeParameters } from './parameters';
import { AuthRevokeResponse } from './response';
import * as got from 'got';

/**
 * Revokes a token.
 */
export function authRevoke(args: StaticAuthRevokeParameters): Promise<AuthRevokeResponse> {
  return got
    .post('https://slack.com/api/auth.revoke', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
