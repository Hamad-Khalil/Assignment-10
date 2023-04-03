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
// console.log(date.getMilliseconds());
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
 

// function isWeekend(date) {
//    let dayOnDate= date.getDay()
//    if (dayOnDate=0) {
//       console.log("This is weekend");
//    } else{console.log("This is not weekend");}
// }
// console.log(isWeekend('Nov 15, 2014'));



// 8. Write a JavaScript function to get difference between two dates in days.  

// let date1= new Date('12/04/2014');
// let date2= new Date('11/02/2014');
// var dayInDt1= date1.getTime();
// var dayInDt2= date2.getTime();
// var diffInSec= dayInDt1> dayInDt2 ? dayInDt1-dayInDt2 : dayInDt2 - dayInDt1;
// var diffInDays= diffInSec/86400000
// console.log(diffInDays);

// 18. Write a JavaScript program to calculate age.
// let DOB= new Date(2000, 11, 4)
// let currDate=new Date()
// let age= currDate.getFullYear() - DOB.getFullYear()
// console.log(age);


// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).
// let date= new Date(2015, 10, 3)
// let dayOnDate= date.getDay()

// do{ console.log("Sun");}while( dayOnDate=0)
// do{ console.log("Mon");}while( dayOnDate=1)
// do{ console.log("Tue");}while( dayOnDate=2)
// do{ console.log("Wed");}while( dayOnDate=3)
// do{ console.log("Thu");}while( dayOnDate=4)
// do{ console.log("Fri");}while( dayOnDate=5)
// do{ console.log("Sat");}while( dayOnDate=6)

// 27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).   

let dt = new Date(2015,2, 1); 
// let dtt1=dt.getMonth() 
// console.log(dtt1);
function monthName(date){
    let numOfMonth= date.getMonth()
    if ( numOfMonth=1){console.log("Jan");} else if ( numOfMonth=2){
        console.log("Feb");
    }
    }
    // return numOfMonth
console.log(monthName(dt));


// 28. Write a JavaScript function to get a full numeric representation of a year (4 digits).

// let dt = new Date(2015, 10, 1) 
// function fullYear(date){
//     console.log(date.getFullYear());
// }
// fullYear(dt)



// 49. Write a JavaScript function to get time differences in years between two dates.

// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2017 11:13:00");
// function getYearDiff ( date1, date2){
//    let dat1= date1.getFullYear()
//    let dat2=date2.getFullYear()
//    let yearDiff= dat2-dat1
//    return yearDiff
// }
// console.log( getYearDiff(dt1, dt2));



