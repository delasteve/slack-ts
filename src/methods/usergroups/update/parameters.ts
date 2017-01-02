// This file is auto-generated.

export interface StaticUsergroupsUpdateParameters {
  /**
   * Authentication token.
   * Requires scope: usergroups:write
   */
  token: string;

  /**
   * The encoded ID of the User Group to update.
   */
  usergroup: string;

  /**
   * A name for the User Group. Must be unique among User Groups.
   */
  name?: string;

  /**
   * A mention handle. Must be unique among channels, users and User Groups.
   */
  handle?: string;

  /**
   * A short description of the User Group.
   */
  description?: string;

  /**
   * A comma separated string of encoded channel IDs for which the User Group uses as a default.
   */
  channels?: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}

export interface UsergroupsUpdateParameters {
  /**
   * Authentication token.
   * Requires scope: usergroups:write
   */
  token?: string;

  /**
   * The encoded ID of the User Group to update.
   */
  usergroup: string;

  /**
   * A name for the User Group. Must be unique among User Groups.
   */
  name?: string;

  /**
   * A mention handle. Must be unique among channels, users and User Groups.
   */
  handle?: string;

  /**
   * A short description of the User Group.
   */
  description?: string;

  /**
   * A comma separated string of encoded channel IDs for which the User Group uses as a default.
   */
  channels?: string;

  /**
   * Include the number of users in the User Group.
   */
  include_count?: boolean;
}
