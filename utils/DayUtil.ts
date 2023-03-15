import showLog from "../ShowLog";
import myConsole from "../ShowLog";

export function countDifferent(firstDate: Date, secondDate: Date) {
  const day = 24;
  const hour = 60;
  const minute = 60;

  const difDay =
    (secondDate.getTime() - firstDate.getTime()) / (day * hour * minute * 1000);
  const difDayRounded = Math.floor(difDay);

  const difHour = (difDay - difDayRounded) * day;
  const difHourRounded = Math.floor(difHour);

  const difMinute = (difHour - difHourRounded) * hour;
  const difMinuteRounded = Math.floor(difMinute);

  const difSecond = (difMinute - difMinuteRounded) * minute;
  const difSecondRounded = Math.floor(difSecond);

  return {
    day: difDayRounded,
    hour: difHourRounded,
    minute: difMinuteRounded,
    second: difSecondRounded,
  };
}
