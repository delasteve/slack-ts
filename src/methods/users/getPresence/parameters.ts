// This file is auto-generated.

export interface StaticUsersGetPresenceParameters {
  /**
   * Authentication token.
   * Requires scope: users:read
   */
  token: string;

  /**
   * User to get presence info on. Defaults to the authed user.
   */
  user: string;
}

export interface UsersGetPresenceParameters {
  /**
   * Authentication token.
   * Requires scope: users:read
   */
  token?: string;

  /**
   * User to get presence info on. Defaults to the authed user.
   */
  user: string;
}
