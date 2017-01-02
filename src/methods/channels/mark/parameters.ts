// This file is auto-generated.

export interface StaticChannelsMarkParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}

export interface ChannelsMarkParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}
