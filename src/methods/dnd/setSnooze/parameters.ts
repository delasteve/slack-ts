// This file is auto-generated.

export interface StaticDndSetSnoozeParameters {
  /**
   * Authentication token.
   * Requires scope: dnd:write
   */
  token: string;

  /**
   * Number of minutes, from now, to snooze until.
   */
  num_minutes: number;
}

export interface DndSetSnoozeParameters {
  /**
   * Authentication token.
   * Requires scope: dnd:write
   */
  token?: string;

  /**
   * Number of minutes, from now, to snooze until.
   */
  num_minutes: number;
}
