// This file is auto-generated.

export interface StaticGroupsMarkParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}

export interface GroupsMarkParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}
