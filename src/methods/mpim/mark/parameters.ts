// This file is auto-generated.

export interface StaticMpimMarkParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:write
   */
  token: string;

  /**
   * multiparty direct message channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}

export interface MpimMarkParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:write
   */
  token?: string;

  /**
   * multiparty direct message channel to set reading cursor in.
   */
  channel: string;

  /**
   * Timestamp of the most recently seen message.
   */
  ts: number;
}
