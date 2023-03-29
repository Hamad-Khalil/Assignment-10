// 2. Write a JavaScript function to get the current date.

// function curDate() {
//     return new Date()
// }
//  console.log(curDate().getDate() + '/' + curDate().getMonth() + '/' + curDate().getFullYear() );

// 3. Write a JavaScript function to get the number of days in a month

// function getDayInMonth(Year, Month) {
//     return new Date(Year, Month, 0 ).getDate()
// }
//  let date= new Date();
//  let currentYear= date.getFullYear();
//  let currentMonth= date.getMonth()+1;

// // if we have to find days in July
//  let dayInJuly= getDayInMonth(2023, 3)
//  console.log(dayInJuly);



// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).


// function compareDates( date1, date2){
//    date1 > date2? console.log(date1 ,"is greater ", date2) :
//    date2 > date1? console.log(date2 ,"is greater ", date1) :
//    date1 == date2? console.log(date1, "is equal to ", date2):}
// console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));


// 6. Write a JavaScript function to add specified minutes to a Date object.

// let date = new Date()
// let minutes= 30
// function addMinutes (date, minutes) {
//   let sumOfMinutes= date + minutes
//   return sumOfMinutes
// }
// console.log(addMinutes( date,minutes).toString());

// 7. Write a JavaScript function to test whether a date is a weekend

// let givenDate= new Date(03/26/2023)
// let dayOnTheDate= givenDate.getDay();
// if (day= 0) {
//    console.log("This is weekend");
// } else {console.log("This is not a weekend");}

function isWeekend(date) {
   date.getDay()
   if (day=0) {
      console.log("This is weekend");
   } else{console.log("This is not a weekend");}
}
console.log(isWeekend('Nov 15, 2014'));


