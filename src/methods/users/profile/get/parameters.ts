// This file is auto-generated.

export interface StaticUsersProfileGetParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:read
   */
  token: string;

  /**
   * User to retrieve profile info for
   */
  user?: string;

  /**
   * Include labels for each ID in custom profile fields
   */
  include_labels?: boolean;
}

export interface UsersProfileGetParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:read
   */
  token?: string;

  /**
   * User to retrieve profile info for
   */
  user?: string;

  /**
   * Include labels for each ID in custom profile fields
   */
  include_labels?: boolean;
}
