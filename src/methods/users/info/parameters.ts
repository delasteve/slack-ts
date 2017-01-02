// This file is auto-generated.

export interface StaticUsersInfoParameters {
  /**
   * Authentication token.
   * Requires scope: users:read
   */
  token: string;

  /**
   * User to get info on
   */
  user: string;
}

export interface UsersInfoParameters {
  /**
   * Authentication token.
   * Requires scope: users:read
   */
  token?: string;

  /**
   * User to get info on
   */
  user: string;
}
