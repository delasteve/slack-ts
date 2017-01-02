// This file is auto-generated.

export interface StaticGroupsInviteParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token: string;

  /**
   * Private channel to invite user to.
   */
  channel: string;

  /**
   * User to invite.
   */
  user: string;
}

export interface GroupsInviteParameters {
  /**
   * Authentication token.
   * Requires scope: groups:write
   */
  token?: string;

  /**
   * Private channel to invite user to.
   */
  channel: string;

  /**
   * User to invite.
   */
  user: string;
}
