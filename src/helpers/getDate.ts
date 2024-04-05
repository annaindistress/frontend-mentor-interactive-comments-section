import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
    s: "a few seconds ago",
    m: "1 minute ago",
    mm: "%d minutes ago",
    h: "1 hour ago",
    hh: "%d hours ago",
    d: "1 day ago",
    dd: function (number: number) {
      if (number >= 7) {
        if (number / 7 < 2) return "1 week ago";
        return `${Math.round(number / 7)} weeks ago`;
      }
      return `${number} days ago`;
    },
    M: "1 month ago",
    MM: "%d months ago",
    y: "1 year ago",
    yy: "%d years ago",
  },
});

function getDate(postDate: string): string {
  const dateNow = dayjs();
  return dateNow.from(postDate, true);
}

export default getDate;
