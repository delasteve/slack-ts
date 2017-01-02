// This file is auto-generated.

export interface StaticGroupsListParameters {
  /**
   * Authentication token.
   * Requires scope: groups:read
   */
  token: string;

  /**
   * Don't return archived private channels.
   */
  exclude_archived?: boolean;
}

export interface GroupsListParameters {
  /**
   * Authentication token.
   * Requires scope: groups:read
   */
  token?: string;

  /**
   * Don't return archived private channels.
   */
  exclude_archived?: boolean;
}
