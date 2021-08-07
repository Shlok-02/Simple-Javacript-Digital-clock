var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

console.log(date);

var day = document.querySelector("#dayNum");
day.innerHTML = today.getDate();

var Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

var Month = document.querySelector("#month");
Month.innerHTML = Months[today.getMonth()];

var year = document.querySelector("#year");
year.innerHTML = today.getFullYear();

var Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var dateObj = new Date();
var weekdayNum = dateObj.getDay();

var name1 = document.querySelector("#dayname");
name1.innerHTML = Days[weekdayNum];

//Time

var today1 = new Date();

if (today1.getHours() > 12) {
  document.querySelector("#period").innerHTML = "PM";
  document.querySelector("#period").style.backgroundColor = "#0000ff";
}

setInterval(() => {
  var today3 = new Date();
  document.querySelector("#hour").innerHTML = today3.getHours();
  document.querySelector("#minutes").innerHTML = today3.getMinutes();
  document.querySelector("#seconds").innerHTML = today3.getSeconds();
}, 1000);
