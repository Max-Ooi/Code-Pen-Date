/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// // 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

const Date1 = new Date(2016, 6, 27, 13, 30, 0, 0);
	
function isDate(d) {
    return d instanceof Date ; 
  }

console.log(isDate(Date1));

// // 2. Create today's date

const todayDate = new Date();
 
console.log(todayDate);

// // 3. Get the current timestamp (using a static method of Date)

console.log(Date.now())

// // 4. Create a date to represent next Christmas Day

const nextChristmasDay = new Date(2023, 11, 25)

console.log('Next Christmas day is ' + nextChristmasDay)

// 5. Work out how many days it is until christmas

// Get difference between now and xmas

// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second

// Math.floor for whole days; Math.ceil to include today

function daysUntilChristmas(nextChristmasDay, todayDate) {

    const NumdaysUntilChristmas = nextChristmasDay - todayDate;
    return NumdaysUntilChristmas
   }
   
   console.log(Math.floor((daysUntilChristmas(nextChristmasDay, todayDate))/(1000*60*60*24))+' '+'days till Christmas');

// // 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  const date1 = new Date(
    new Date().getFullYear(),
    getRandomIntInclusive(0, 1),
    getRandomIntInclusive(1, 27)
  );
  
  console.log("date1", date1);
  
  const date2 = new Date(
    new Date().getFullYear(),
    getRandomIntInclusive(0, 1),
    getRandomIntInclusive(1, 27)
  );
  
  console.log("date2", date2);

  function compareDates(date1, date2) {

    if (date1 > date2) {
      console.log('date2 is earlier than date1');
    } else if ((date1 < date2)) {
      console.log('date1 is earlier than date2');
    } else {
      console.log('date1 and date2 are the same')
    }

  }

  compareDates(date1, date2)  
  
//   // 7. How do I test if a date is valid? ****
  

//   // 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

  const date8 = new Date(1681208241*1000);

  console.log((date8.getMonth() +1) + '-' + date8.getDate() + '-' + date8.getFullYear())
  
//   // 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

  console.log(date8.toLocaleDateString('en-GB'))
  console.log(date8.toLocaleDateString('de-DE'))
  // 10. Output the current time in hours, mins & seconds
  
  const date10 = new Date();
  const date10Hours = Math.floor(date10/(60*60*1000));
  const date10Minutes =  Math.floor(((date10/(60*60*1000)) - date10Hours)*60);
  const date10Seconds =  Math.floor((((date10/(60*1000)) - Math.floor(date10/(60*1000)))*60))

  console.log(date10Hours+'Hours'+ ' '+ date10Minutes +'Minutes' + ' '+ date10Seconds +'Seconds')

  // 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.
  

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   console.log(
//     ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2));
// }

// setInterval(time, 1000);


//   // 12. Create a copy of today

  var today = new Date();
  var copyToday = new Date(today);
  
//   // 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

  const date13 = new Date();

  date13.setFullYear(date13.getFullYear() +3)
  date13.setMonth(date13.getMonth() +2)
  date13.setDate(date13.getDate() +1)

  console.log(date13.toLocaleString())
  
  // 14. Get your timezone from today (remember it's in mins and the sign is inverted)

  const d = new Date();
let difference = d.getTimezoneOffset();

console.log(difference)
  	
  
  // 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
  
  // const date = new Date(Date.UTC(2023, 3, 11, 14, 19, 20, 334));

  // console.log(new Intl.DateTimeFormat('en-US').format(date));


  // 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

// function time() {
//   var d = new Date();
//   var ms = d.getMilliseconds();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   var day = d.getDate();
//   var month = d.getMonth();
//   var year = d.getFullYear();
//   console.log( year+' years '+ month +' months ' + day+ ' days ' +
//     ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + ":" + ms);
// }

// setInterval(time, 1);
  
  // 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates
  
const date17a = new Date(2022, 5, 22, 20, 24, 33, 455);
const date17b = new Date(2021, 3, 12, 9, 10, 12, 333);

  function compareDates(a,b) {
    c=a-b;
  //c is the difference in time

  const actualTimeInYears = c/(1000*60*60*24*365);
  const y = Math.floor(actualTimeInYears)
  const remainderTimeInMonths = (actualTimeInYears-y)*12;
  const m = (Math.floor(remainderTimeInMonths));
  const remainderTimeInDays = (remainderTimeInMonths-m)*30;
  const d = (Math.floor(remainderTimeInDays))

  //Assumption is that every month has 30 days

  const h = Math.floor((((c/(1000*60*60*24))-(Math.floor((c/(1000*60*60*24)))))*24))

  const min = Math.floor(((c/(1000*60*60))-(Math.floor(c/(1000*60*60))))*60)

  const sec = Math.floor(((c/(1000*60))-Math.floor(c/(1000*60)))*60)

  const msec = Math.floor(((c/(1000))-Math.floor(c/(1000)))*1000)

    console.log(
      y +' year ' + m + ' months ' + d + ' days ' + h + ' hours ' + min + ' mins '+ sec + 'sec ' + msec +' millisec'
    )
  }

  compareDates(date17a,date17b)

  /*****************************************************************
   * For date-fns Exercises follow link on page
   ******************************************************************/
