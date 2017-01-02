// This file is auto-generated.

export interface StaticGroupsSetPurposeParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}

export interface GroupsSetPurposeParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}
