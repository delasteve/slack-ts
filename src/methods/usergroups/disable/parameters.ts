// This file is auto-generated.

export interface StaticUsergroupsDisableParameters {
  /**
   * Authentication token.
   * Requires scope: usergroups:write
   */
  token: string;

  /**
   * The encoded ID of the User Group to disable.
   */
  usergroup: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}

export interface UsergroupsDisableParameters {
  /**
   * Authentication token.
   * Requires scope: usergroups:write
   */
  token?: string;

  /**
   * The encoded ID of the User Group to disable.
   */
  usergroup: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}
