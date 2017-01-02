// This file is auto-generated.

export interface StaticDndTeamInfoParameters {
  /**
   * Authentication token.
   * Requires scope: dnd:read
   */
  token: string;

  /**
   * Comma-separated list of users to fetch Do Not Disturb status for
   */
  users?: string;
}

export interface DndTeamInfoParameters {
  /**
   * Authentication token.
   * Requires scope: dnd:read
   */
  token?: string;

  /**
   * Comma-separated list of users to fetch Do Not Disturb status for
   */
  users?: string;
}
