// This file is auto-generated.

export interface StaticGroupsCloseParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to close.
   */
  channel: string;
}

export interface GroupsCloseParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to close.
   */
  channel: string;
}
