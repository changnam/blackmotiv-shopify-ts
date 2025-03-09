import { ReadonlyURLSearchParams } from "next/navigation";

export function ensureStartWith(stringToCheck: string, startsWith: string) {
  return stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;
}

export function createUrl(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
}

export function addDays(date: Date, daysToAdd: number) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + daysToAdd);
  return clone;
}

export function getWeek(forDate: Date, daysOffset: number = 0) {
  const date = addDays(forDate, daysOffset);
  const day = date.getDay(); // 날짜의 요일 index 를 구함. 화요일은 2임

  return {
    date,
    start: addDays(date, -day), // 정해진 날짜가 화요일이라면 2일 앞으로 시프트 시킴
    end: addDays(date, 6 - day), //정해진 날짜가 화요일이라면 4일 뒤로 시프트 시킴
  };
}

export function getFirstDayOfMonth(date?: Date) {
  const today = new Date();
  var firstDayOfMonth = null;
  if (date) {
    firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  } else {
    firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  }

  return firstDayOfMonth;
}
