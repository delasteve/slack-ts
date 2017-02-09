// This file is auto-generated.

import { StaticGroupsMarkParameters } from './parameters';
import { GroupsMarkResponse } from './response';
import * as got from 'got';

/**
 * Sets the read cursor in a private channel.
 */
export function groupsMark(args: StaticGroupsMarkParameters): Promise<GroupsMarkResponse> {
  return got
    .post('https://slack.com/api/groups.mark', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
