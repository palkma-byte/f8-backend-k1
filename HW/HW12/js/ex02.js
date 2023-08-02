const startDate = "2020-01-01";
const endDate = "2020-01-22";

const startDateObj = new Date(startDate);
const endDateObj = new Date(endDate);

const result =
  -(startDateObj.getTime() - endDateObj.getTime()) / (1000 * 3600 * 24);
console.log(result);
