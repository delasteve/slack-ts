// This file is auto-generated.

export interface StaticUsersSetPresenceParameters {
  /**
   * Authentication token.
   * Requires scope: users:write
   */
  token: string;

  /**
   * Either auto or away
   */
  presence: string;
}

export interface UsersSetPresenceParameters {
  /**
   * Authentication token.
   * Requires scope: users:write
   */
  token?: string;

  /**
   * Either auto or away
   */
  presence: string;
}
