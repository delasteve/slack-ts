// This file is auto-generated.

import { StaticGroupsRenameParameters } from './parameters';
import { GroupsRenameResponse } from './response';
import * as got from 'got';

/**
 * Renames a private channel.
 */
export function groupsRename(args: StaticGroupsRenameParameters): Promise<GroupsRenameResponse> {
  return got
    .post('https://slack.com/api/groups.rename', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
