/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Days): boolean {
  if (day === Days.Saturday || day === Days.Sunday) {
    return true;
  } else {
    return false;
  }
}
