// This file is auto-generated.

export interface StaticUsersListParameters {
  /**
   * Authentication token.
   * Requires scope: users:read
   */
  token: string;

  /**
   * Whether to include presence data in the output
   */
  presence?: boolean;
}

export interface UsersListParameters {
  /**
   * Authentication token.
   * Requires scope: users:read
   */
  token?: string;

  /**
   * Whether to include presence data in the output
   */
  presence?: boolean;
}
