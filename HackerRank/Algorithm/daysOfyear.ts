function dayOfProgrammer(year: number): string {
  let day = 256;

  if (year === 1918) {
    // Special case for transition year (1918)
    day += 13; // 13 days were skipped in February
  } else if (
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
  ) {
    // Leap year (Julian or Gregorian)
    day -= 244; // 244 days have passed until September 12th
  } else {
    // Non-leap year (Julian or Gregorian)
    day -= 243; // 243 days have passed until September 13th
  }

  return `${day}.09.${year}`;
}
