// This file is auto-generated.

export interface StaticMpimOpenParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:write
   */
  token: string;

  /**
   * Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.
   */
  users: string;
}

export interface MpimOpenParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:write
   */
  token?: string;

  /**
   * Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.
   */
  users: string;
}
