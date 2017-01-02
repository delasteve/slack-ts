// This file is auto-generated.

export interface StaticUsersProfileSetParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:write
   */
  token: string;

  /**
   * ID of user to change. This argument may only be specified by team admins on paid teams.
   */
  user?: string;

  /**
   * Collection of key:value pairs presented as a URL-encoded JSON hash.
   */
  profile?: string;

  /**
   * Name of a single key to set. Usable only if profile is not passed.
   */
  name?: string;

  /**
   * Value to set a single key to. Usable only if profile is not passed.
   */
  value?: string;
}

export interface UsersProfileSetParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:write
   */
  token?: string;

  /**
   * ID of user to change. This argument may only be specified by team admins on paid teams.
   */
  user?: string;

  /**
   * Collection of key:value pairs presented as a URL-encoded JSON hash.
   */
  profile?: string;

  /**
   * Name of a single key to set. Usable only if profile is not passed.
   */
  name?: string;

  /**
   * Value to set a single key to. Usable only if profile is not passed.
   */
  value?: string;
}
