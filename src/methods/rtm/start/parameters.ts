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
  simple_latest?: string;

  /**
   * Skip unread counts for each channel (improves performance).
   */
  no_unreads?: string;

  /**
   * Returns MPIMs to the client in the API response.
   */
  mpim_aware?: string;
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
  simple_latest?: string;

  /**
   * Skip unread counts for each channel (improves performance).
   */
  no_unreads?: string;

  /**
   * Returns MPIMs to the client in the API response.
   */
  mpim_aware?: string;
}
