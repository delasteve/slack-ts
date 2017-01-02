// This file is auto-generated.

export interface StaticRemindersAddParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:write
   */
  token: string;

  /**
   * The content of the reminder
   */
  text: string;

  /**
   * When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")
   */
  time: number;

  /**
   * The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.
   */
  user?: string;
}

export interface RemindersAddParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:write
   */
  token?: string;

  /**
   * The content of the reminder
   */
  text: string;

  /**
   * When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")
   */
  time: number;

  /**
   * The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.
   */
  user?: string;
}
