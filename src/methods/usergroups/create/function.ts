// This file is auto-generated.

import { StaticUsergroupsCreateParameters } from './parameters';
import { UsergroupsCreateResponse } from './response';
import * as got from 'got';

/**
 * Create a User Group
 */
export function usergroupsCreate(args: StaticUsergroupsCreateParameters): Promise<UsergroupsCreateResponse> {
  return got
    .post('https://slack.com/api/usergroups.create', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
