// This file is auto-generated.

export interface StaticGroupsKickParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from private channel.
   */
  user: string;
}

export interface GroupsKickParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from private channel.
   */
  user: string;
}
