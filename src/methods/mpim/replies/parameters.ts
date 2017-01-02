// This file is auto-generated.

export interface StaticMpimRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:history
   */
  token: string;

  /**
   * Multiparty direct message channel to fetch thread from.
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message.
   */
  thread_ts: number;
}

export interface MpimRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:history
   */
  token?: string;

  /**
   * Multiparty direct message channel to fetch thread from.
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message.
   */
  thread_ts: number;
}
