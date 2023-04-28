// 1. Write a js program to find cube of any number using function.
// let number= 5;

// function findCube(number) {
//     let cube= number * number * number
//     return cube
// }
// console.log(findCube(number));


// 2. Write a js program to find diameter, circumference and area of circle using functions
// To find diameter circumference or area of a circle, we need radius

// let radius= 5

// function findDiameter(radius) {
//     Diameter= 2 * radius   
//  return Diameter
// }
// function findCicurcumference(radius) {
//     circumference= 2 * 3.14 * radius
//     return circumference
// }
// function findArea (radius){
//      area= 3.14 * (radius * radius)
//      return area
//  }
//  console.log( findDiameter(radius));
//  console.log( findCicurcumference(radius));
//   console.log( findArea(radius));

// 3. Write a js program to find maximum and minimum between two numbers using functions
// let num1= 10;
// let num2=10;
// function findMaxBTWtwo( num1,num2){
//     if(num1> num2){
//         console.log(num1,'is the maximum' , num2, 'is the minimum');
//     } else if( num2> num1){
//         console.log(num2,'is the maximum', num1,'is the minimum ');
//     } else {console.log('Both numbers are equal');}
// }
// findMaxBTWtwo(num1, num2)

// 4. Write a js program to check whether a number is even or odd using functions.

// let number= 7;

// function evenOrOdd (num){
//     if (num % 2==0){
//         console.log('This is a even number');
//     } else { console.log('This is a odd number');}
// }
// console.log(evenOrOdd(number));


// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// let num= 69;
//  function isPrime(n) {
//     if( n <=2)
//       return 'This is not prime Number'

//     for (let i = 2; i < n; i++ ){
//         if (n % i == 0) {
//             return 'This is not prime Number'
//         }
//     } 
//     return 'This is prime Number'
//  }

// console.log(isPrime(num));


// 6.   // Write a js program to find all prime numbers between given interval using functions

// let num= 1;2;3;4;5;6;7;8;9;10;11;12;13;14;15
// let primeNum= []
// function findPrimeNum (numbers){
//     for (let i = numbers; i < numbers){
//         if( numbers =>2)

//     } else if
// }

// 7. Write a js program to print all strong numbers between given interval using functions.



// 8. Write a js program to print all Armstrong numbers between given interval using functions.
// 9. Write a JavaScript program to calculate the area and perimeter of a circle.

// let radius= 3;
// 1st method

// let area= 3.14 * (radius * radius)

// let perimeter= 2 * 3.14 * radius

// console.log(area, perimeter);

// 2nd Method

// function findArea (radius){
//     area= 3.14 * (radius * radius)
//     return area
// }
//  console.log(findArea(radius));

//  function findPerimeter(radius) {
//     perimeter= 2 * 3.14 * radius
//     return perimeter
//  }

//  console.log(findPerimeter(radius));

// 10. Write a js program to find power of any number using function.
// let base= 2;
// let exponenet=5;
// let result=1
// function findPower (base, exponenet){
//    for( let i = 1; i<=exponenet; i++){
//     result= result * base
//    }
//    return result
// }
// console.log(findPower( base , exponenet));

//11.Write a js program to print all natural numbers between 1 to n using function.

// let n= 10;

// function findNaturalNum(num){
//     for( let i=1;i<=num; i++ ){
//         console.log(i);
//     }
// }
// findNaturalNum(n);


// 12. Write a js program to print all even or odd numbers in given range using function.
// function findEvenOdd(startNum, endNum){
//     let evenNum=[]
//     let oddNum=[]
//     for ( let i= startNum; i<= endNum; i++){
//         if(i % 2 ==0)
//       {evenNum.push(i)} 
//       else {oddNum.push(i);}
//     }
//     return {'Odd Numbers are':oddNum, 'Even Numbers are': evenNum}
// }
// console.log(findEvenOdd(1,10));


// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

// function findSumOfNatNum (n){
//     let temp=0
//   for( let i= 1; i <= n; i++){
//    temp= temp+i
// }return temp
// }
// console.log(findSumOfNatNum(5));


// 14. Write a js program to find sum of all even or odd numbers in given range using function.
// function findEvenOdd(startNum, endNum){
//     let evenNum=0
//     let oddNum=0
//     for ( let i= startNum; i<= endNum; i++){
//         if(i % 2 ==0)
//       {evenNum= evenNum + i} 
//       else {oddNum= oddNum + i;}
//     }
//     return {'Sum of odd Number is':oddNum, 'Sum of even Number is': evenNum}
// }
// console.log(findEvenOdd(1,10));

// 15. Write a js program to find reverse of any number using function.
// function reverseNum(num){
//     let numToStr= num.toString()
//     let strToArr= []
//     for( let i= 0; i<numToStr.length; i++){
//         strToArr.push(numToStr[i])
//     }
//     let arr=strToArr.reverse();
//     console.log(arr.join(""));
// }
// //let num=123456789
// reverseNum(123456789)

// 16. Write a js program to check whether a number is palindrome or not using function.

// 17. Write a js program to find sum of digits of a given number using function.
// let num=1234
// function SumOfDigitInNum(num){
//         let numToStr= num.toString()
//         let strToArr= []
//         for( let i= 0; i<numToStr.length; i++){
//             strToArr.push(parseInt(numToStr[i]))
//         }
//         let sum=0
//         for(let i=0; i<strToArr.length;i++){
//             sum= sum + strToArr[i]
//         }
//         return sum
//     }
   
//     console.log(SumOfDigitInNum(num));
// 18. Write a js program to find factorial of any number using function.
// let num= 5;
// function findFactorial(n){
//     let temp=1;
//     for (let i= n; i>=1; i--){
//      temp= temp* i
//     } return temp
// }
// console.log(findFactorial(num));

// 19. Write a js program to generate nth Fibonacci term using function.

// 20. Write a js program to find GCD (HCF) of two numbers using function.

// 21. Write a js program to find LCM of two numbers using function.

// 22. Write a js program to display all array elements using function.
// let array=[1,2,3,4,5,6,7,8,9,0]
// for (let index = 0; index <= array.length; index++) {
//     console.log(index);
// }

// 23. Write a js program to find sum of elements of array using function.

// let array= [1,2,3,4,5]
// function findSumOfArr( array){
//     let sum=0
//     for( let i=0; i<= array.length; i++){
//         sum=sum+i
//     } return sum
// }
// console.log(findSumOfArr(array));

// 24. Write a js program to find maximum and minimum elements in array using function.






