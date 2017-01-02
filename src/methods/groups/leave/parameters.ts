// This file is auto-generated.

export interface StaticGroupsLeaveParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to leave
   */
  channel: string;
}

export interface GroupsLeaveParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to leave
   */
  channel: string;
}
