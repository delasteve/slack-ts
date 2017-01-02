// This file is auto-generated.

export interface StaticGroupsRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: groups:history
   */
  token: string;

  /**
   * Private channel to fetch thread from
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message
   */
  thread_ts: number;
}

export interface GroupsRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: groups:history
   */
  token?: string;

  /**
   * Private channel to fetch thread from
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message
   */
  thread_ts: number;
}
