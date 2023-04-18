import { parseISO, format } from "date-fns";

export const dateFormats = {
  frontPage: "LLLL d HH:mm",
  missionSummary: "dd.MM.y HH:mm O",
};

export default function DateTime({
  seconds,
  dateFormat,
  timeZone = 0,
}: {
  seconds: number;
  dateFormat?: string;
  timeZone?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
}) {
  if (!seconds) return <p>no time yet</p>;
  const date = new Date();
  date.setTime((seconds - 60 * 60 * timeZone) * 1000);
  if (dateFormat) return <time>{format(date, dateFormat)}</time>;
  return <time>{format(date, "LLLL d HH:mm ")}</time>;
}
