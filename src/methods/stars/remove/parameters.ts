// This file is auto-generated.

export interface StaticStarsRemoveParameters {
  /**
   * Authentication token.
   * Requires scope: stars:write
   */
  token: string;

  /**
   * File to remove star from.
   */
  file?: string;

  /**
   * File comment to remove star from.
   */
  file_comment?: string;

  /**
   * Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).
   */
  channel?: string;

  /**
   * Timestamp of the message to remove star from.
   */
  timestamp?: number;
}

export interface StarsRemoveParameters {
  /**
   * Authentication token.
   * Requires scope: stars:write
   */
  token?: string;

  /**
   * File to remove star from.
   */
  file?: string;

  /**
   * File comment to remove star from.
   */
  file_comment?: string;

  /**
   * Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).
   */
  channel?: string;

  /**
   * Timestamp of the message to remove star from.
   */
  timestamp?: number;
}
