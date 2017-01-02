// This file is auto-generated.

export interface StaticGroupsRenameParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to rename
   */
  channel: string;

  /**
   * New name for private channel.
   */
  name: string;
}

export interface GroupsRenameParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to rename
   */
  channel: string;

  /**
   * New name for private channel.
   */
  name: string;
}
