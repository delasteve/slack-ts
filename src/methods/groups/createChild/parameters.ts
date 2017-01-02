// This file is auto-generated.

export interface StaticGroupsCreateChildParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to clone and archive.
   */
  channel: string;
}

export interface GroupsCreateChildParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to clone and archive.
   */
  channel: string;
}
