function convertMilliseconds(milliseconds) {
  const msPerSecond = 1000;
  const msPerMinute = 60 * msPerSecond;
  const msPerHour = 60 * msPerMinute;
  const msPerDay = 24 * msPerHour;

  const days = Math.floor(milliseconds / msPerDay);
  milliseconds -= days * msPerDay;

  const hours = Math.floor(milliseconds / msPerHour);
  milliseconds -= hours * msPerHour;

  const minutes = Math.floor(milliseconds / msPerMinute);
  milliseconds -= minutes * msPerMinute;

  const seconds = Math.floor(milliseconds / msPerSecond);
  milliseconds -= seconds * msPerSecond;

  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`;
}


const result = convertMilliseconds(30154);
console.log(result);
