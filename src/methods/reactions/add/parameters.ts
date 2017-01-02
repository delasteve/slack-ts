// This file is auto-generated.

export interface StaticReactionsAddParameters {
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
   * File to add reaction to.
   */
  file?: string;

  /**
   * File comment to add reaction to.
   */
  file_comment?: string;

  /**
   * Channel where the message to add reaction to was posted.
   */
  channel?: string;

  /**
   * Timestamp of the message to add reaction to.
   */
  timestamp?: number;
}

export interface ReactionsAddParameters {
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
   * File to add reaction to.
   */
  file?: string;

  /**
   * File comment to add reaction to.
   */
  file_comment?: string;

  /**
   * Channel where the message to add reaction to was posted.
   */
  channel?: string;

  /**
   * Timestamp of the message to add reaction to.
   */
  timestamp?: number;
}
