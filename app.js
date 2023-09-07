const weekday = document.getElementById("current");
const getUTCtime = document.getElementById("utc");

const today = new Date();

// get current day of the week
const options = { weekday: "long" };
const day = new Intl.DateTimeFormat("en-US", options).format(today);
weekday.innerHTML = day;

// get current  UTC time
const currentUTCTimeInMilliseconds = today.getTime().toString();

getUTCtime.innerHTML = currentUTCTimeInMilliseconds;
