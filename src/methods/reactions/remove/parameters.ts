// This file is auto-generated.

export interface StaticReactionsRemoveParameters {
  /**
   * Authentication token.
   * Requires scope: reactions:write
   */
  token: string;

  /**
   * Reaction (emoji) name.
   */
  name: string;

  /**
   * File to remove reaction from.
   */
  file?: string;

  /**
   * File comment to remove reaction from.
   */
  file_comment?: string;

  /**
   * Channel where the message to remove reaction from was posted.
   */
  channel?: string;

  /**
   * Timestamp of the message to remove reaction from.
   */
  timestamp?: number;
}

export interface ReactionsRemoveParameters {
  /**
   * Authentication token.
   * Requires scope: reactions:write
   */
  token?: string;

  /**
   * Reaction (emoji) name.
   */
  name: string;

  /**
   * File to remove reaction from.
   */
  file?: string;

  /**
   * File comment to remove reaction from.
   */
  file_comment?: string;

  /**
   * Channel where the message to remove reaction from was posted.
   */
  channel?: string;

  /**
   * Timestamp of the message to remove reaction from.
   */
  timestamp?: number;
}
