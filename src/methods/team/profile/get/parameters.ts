// This file is auto-generated.

export interface StaticTeamProfileGetParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:read
   */
  token: string;

  /**
   * Filter by visibility.
   */
  visibility?: string;
}

export interface TeamProfileGetParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:read
   */
  token?: string;

  /**
   * Filter by visibility.
   */
  visibility?: string;
}
