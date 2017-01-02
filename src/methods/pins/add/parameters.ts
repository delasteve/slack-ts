// This file is auto-generated.

export interface StaticPinsAddParameters {
  /**
   * Authentication token.
   * Requires scope: pins:write
   */
  token: string;

  /**
   * Channel to pin the item in.
   */
  channel: string;

  /**
   * File to pin.
   */
  file?: string;

  /**
   * File comment to pin.
   */
  file_comment?: string;

  /**
   * Timestamp of the message to pin.
   */
  timestamp?: number;
}

export interface PinsAddParameters {
  /**
   * Authentication token.
   * Requires scope: pins:write
   */
  token?: string;

  /**
   * Channel to pin the item in.
   */
  channel: string;

  /**
   * File to pin.
   */
  file?: string;

  /**
   * File comment to pin.
   */
  file_comment?: string;

  /**
   * Timestamp of the message to pin.
   */
  timestamp?: number;
}
