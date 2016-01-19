var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else if (isNaN(year)) {
    return "Please enter a year.";
  } else {
    return false;
  }
};
