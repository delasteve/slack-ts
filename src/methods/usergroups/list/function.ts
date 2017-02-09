// This file is auto-generated.

import { StaticUsergroupsListParameters } from './parameters';
import { UsergroupsListResponse } from './response';
import * as got from 'got';

/**
 * List all User Groups for a team
 */
export function usergroupsList(args: StaticUsergroupsListParameters): Promise<UsergroupsListResponse> {
  return got
    .post('https://slack.com/api/usergroups.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
