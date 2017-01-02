// This file is auto-generated.

export interface StaticDndInfoParameters {
  /**
   * Authentication token.
   * Requires scope: dnd:read
   */
  token: string;

  /**
   * User to fetch status for (defaults to current user)
   */
  user?: string;
}

export interface DndInfoParameters {
  /**
   * Authentication token.
   * Requires scope: dnd:read
   */
  token?: string;

  /**
   * User to fetch status for (defaults to current user)
   */
  user?: string;
}
