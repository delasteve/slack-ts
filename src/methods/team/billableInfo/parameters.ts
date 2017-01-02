// This file is auto-generated.

export interface StaticTeamBillableInfoParameters {
  /**
   * Authentication token.
   * Requires scope: admin
   */
  token: string;

  /**
   * A user to retrieve the billable information for. Defaults to all users.
   */
  user?: string;
}

export interface TeamBillableInfoParameters {
  /**
   * Authentication token.
   * Requires scope: admin
   */
  token?: string;

  /**
   * A user to retrieve the billable information for. Defaults to all users.
   */
  user?: string;
}
