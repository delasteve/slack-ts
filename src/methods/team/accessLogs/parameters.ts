// This file is auto-generated.

export interface StaticTeamAccessLogsParameters {
  /**
   * Authentication token.
   * Requires scope: admin
   */
  token: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;

  /**
   * End of time range of logs to include in results (inclusive).
   */
  before?: number;
}

export interface TeamAccessLogsParameters {
  /**
   * Authentication token.
   * Requires scope: admin
   */
  token?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;

  /**
   * End of time range of logs to include in results (inclusive).
   */
  before?: number;
}
