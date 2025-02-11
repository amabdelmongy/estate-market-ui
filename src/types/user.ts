export interface User {
  _id?: string;
  name?: string;
  password?: string;
  avatar?: string;
  role?: string;
  email?: string | undefined;
  lead_campaign?: number[];
  number_of_seats?: string;
  campaign_status?: string;
  [key: string]: unknown;
  timeZone?: string | undefined;
}

export interface AllUsers {
  pageLength: number;
  page: number;
  pages: number;
  count: number;
  users: User[];
}

export interface LoggedInUser {
  name: string;
  email: string;
  role?: string;
  lead_campaign?: number;
  number_of_seats?: string;
  campaign_status?: string;
  timeZone?: string;
}

export const timeZones = [
  "",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Phoenix",
  "Pacific/Honolulu",
] as const;
