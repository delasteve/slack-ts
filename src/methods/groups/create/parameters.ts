// This file is auto-generated.

export interface StaticGroupsCreateParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Name of private channel to create
   */
  name: string;
}

export interface GroupsCreateParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Name of private channel to create
   */
  name: string;
}
