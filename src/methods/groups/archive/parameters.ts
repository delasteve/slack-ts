// This file is auto-generated.

export interface StaticGroupsArchiveParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to archive
   */
  channel: string;
}

export interface GroupsArchiveParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to archive
   */
  channel: string;
}
