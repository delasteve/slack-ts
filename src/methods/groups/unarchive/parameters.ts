// This file is auto-generated.

export interface StaticGroupsUnarchiveParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to unarchive
   */
  channel: string;
}

export interface GroupsUnarchiveParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to unarchive
   */
  channel: string;
}
