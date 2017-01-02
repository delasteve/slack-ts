// This file is auto-generated.

export interface StaticGroupsOpenParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to open.
   */
  channel: string;
}

export interface GroupsOpenParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to open.
   */
  channel: string;
}
