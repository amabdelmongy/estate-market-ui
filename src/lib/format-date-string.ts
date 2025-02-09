import moment from "moment-timezone";

export const formatDateString = (
  date: Date | undefined | null | "",
): string => {
  if (date) {
    const timezone =
      localStorage.getItem("custom-auth-timezone") ?? "America/New_York";
    return moment.tz(date, timezone).format("YYYY-MM-DD hh:mm A");
  }
  return "";
};
