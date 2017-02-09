// This file is auto-generated.

export interface StaticRtmStartParameters {
  /**
   * Authentication token.
   * Requires scope: client
   */
  token: string;

  /**
   * Return timestamp only for latest message object of each channel (improves performance).
   */
  simple_latest?: boolean;

  /**
   * Skip unread counts for each channel (improves performance).
   */
  no_unreads?: boolean;

  /**
   * Returns MPIMs to the client in the API response.
   */
  mpim_aware?: boolean;
}

export interface RtmStartParameters {
  /**
   * Authentication token.
   * Requires scope: client
   */
  token?: string;

  /**
   * Return timestamp only for latest message object of each channel (improves performance).
   */
  simple_latest?: boolean;

  /**
   * Skip unread counts for each channel (improves performance).
   */
  no_unreads?: boolean;

  /**
   * Returns MPIMs to the client in the API response.
   */
  mpim_aware?: boolean;
}
