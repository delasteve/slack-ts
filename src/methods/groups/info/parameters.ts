// This file is auto-generated.

export interface StaticGroupsInfoParameters {
  /**
   * Authentication token.
   * Requires scope: groups:read
   */
  token: string;

  /**
   * Private channel to get info on
   */
  channel: string;
}

export interface GroupsInfoParameters {
  /**
   * Authentication token.
   * Requires scope: groups:read
   */
  token?: string;

  /**
   * Private channel to get info on
   */
  channel: string;
}
