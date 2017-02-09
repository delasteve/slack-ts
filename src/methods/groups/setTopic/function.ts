// This file is auto-generated.

import { StaticGroupsSetTopicParameters } from './parameters';
import { GroupsSetTopicResponse } from './response';
import * as got from 'got';

/**
 * Sets the topic for a private channel.
 */
export function groupsSetTopic(args: StaticGroupsSetTopicParameters): Promise<GroupsSetTopicResponse> {
  return got
    .post('https://slack.com/api/groups.setTopic', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
