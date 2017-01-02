// This file is auto-generated.

export interface StaticImRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: im:history
   */
  token: string;

  /**
   * Direct message channel to fetch thread from
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message
   */
  thread_ts: number;
}

export interface ImRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: im:history
   */
  token?: string;

  /**
   * Direct message channel to fetch thread from
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message
   */
  thread_ts: number;
}
