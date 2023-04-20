// Write a function that takes in a string and returns it when reversed in javcript
let food = "eating";
function reversing(food) {
    food.reverse();
    console.log(food);
}

// reversing(food);

// 2 Write a function that takes in the following array and consoles the target if it is found else null
let num = [2,8,0,23,5,45,76]   
target = 23;

function tobesorted(num){

if (num.length<=1) {
    return num
}
let middle = Math.floor(num.length/2)
let left= num.splice(0,middle);
let right= num.splice(middle);

return sort (tobesorted(left), tobesorted(right))
}

function sort(left, right){
    let leftindex = 0;
    let rightindex=0;
    let empty= []

while ((left[leftindex]<left.length)&& (right[rightindex]<right.length) )  {
    
if (left[leftindex]<right[rightindex]) {
    empty.push(left[leftindex])
    leftindex ++
}
else {
    empty.push(right[rightindex])
    rightindex++
}

return empty.concat(left.slice(left[leftindex])).concat(right.slice(right[rightindex]))
}

}

console.log(sort(tobesorted));
// let empty =  [0,2,5,8,23,45,76]

function finding(empty, target) {
    let left2 = 0;
    let right2 = empty.length -1;
    let middleone = Math.floor((left2+right2)/2);

while(left2<=right2)    {
    if (empty[middleone]===target) {
        return middle
    }
    else if (empty[middleone]<target){
       left2= middleone +1
    }
    else{
        right2= middleone -1
    }
    

}
return null 
}

console.log( finding(empty,target));

// 3 Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

 array = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
for (let e = 0; e < array.length; e++) {
//     do { console.log(array[e]);
        
//     } while (e===4);
//     break

//    }

   if(e===4){
    console.log(array[e]," leap year");
   }
   else{console.log(array[e],"not leap year");}
   if(e===8){
    console.log(array[e]," leap year");
   }
   else{console.log(array[e],"not leap year");}
   if(e===12){
    console.log(array[e]," leap year");
   }
   else{console.log(array[e],"not leap year");}
   if(e===16){
    console.log(array[e]," leap year");
   }
   else{console.log(array[e],"not leap year");}}


// 4 Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

// let bb = [0<x<=100]
// console.log(x);



// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
function multiply(numArray){
for (let n = 0; n < numArray.length; n++) {
    let x = numArray[n] *4;
    console.log("q5",x);
}
}
multiply(numArray)

// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
let nums = ["10","24","45","56","67"]
let m = []
function transform(nums) {
  for (let t = 0; t < nums.length; t++) {
    let letter = nums[t];
    console.log("w",letter);
    m. push(letter)
    console.log("s", m); 
  }
    
}
transform(nums)


