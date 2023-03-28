
// function that shows current date, with a parameter where you can add days to the date.
// The parameter will be used to get date for the next 3 days, so I can use that in my forecast.
export function currentDateTime(futureDays = 0) {
  // Get current or future date
  const date = new Date();
  const day = date.getDate() + futureDays;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayOfWeekName = daysOfWeek[date.getDay() + futureDays];

  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return { date: `${year}-0${month}-${day}T12`, dayOfWeek: dayOfWeekName };
}