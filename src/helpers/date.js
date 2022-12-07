import moment from "moment/moment";
moment().format();
export function numberOfYears(date1) {
  var date = `${moment().toDate()}`.split(" ");

  var selectYear = date1.split("-")[0];
  var selectMonth = date1.split("-")[1];
  var a = moment([moment().year(), moment().month()]);
  var b = moment([selectYear, selectMonth]);
  a.diff(b, "years"); // 1
  var value = a.diff(b, "years", true); // 1.75
  console.log(value);
  return value;
}
