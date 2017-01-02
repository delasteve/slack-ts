// This file is auto-generated.

export interface StaticGroupsSetTopicParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}

export interface GroupsSetTopicParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}
