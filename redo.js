// Write a function that takes in a string and returns it when reversed
let food = "eating"

function reversing(food) {
    let g = food.split("").reverse().join("")    
    console.log(g);
}
reversing(food)


// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
let num = [2, 8, 0, 23, 5, 45, 76];
let target = 23;

function sorting(num) {
  if (num.length <= 1) {
    return num;
  }

  let middle = Math.floor(num.length / 2);
  let left = num.slice(0, middle);
  let right = num.slice(middle);

  console.log({ left });
  console.log(right);
  return sortedArray(sorting(left), sorting(right));
}

function sortedArray(left, right) {
  let emptyArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      emptyArray.push(left.shift());
    } else {
      emptyArray.push(right.shift());
    }
  }
  console.log({ emptyArray });
  return [...emptyArray, ...left, ...right];
}

console.log(sorting(num));

function binary(num, target) {
  let left = 0;
  const sort = sorting(num);
  let right = sort.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (sort[middle] === target) {
      console.log(target);
      return;
    } else if (sort[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  console.log(null);
}

binary(num, target);




// 3 Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for (let year = 2000; year<=2023; year++) {
    if (year %4==0 ) {
        // &&(year %100 !==0 || year%400==0)
        console.log(year+"is leap year");
    }
    else {console.log(year +"is not leap year");}
    
}


// 4 Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (let n = 0; n <=100; n++) {
    if (n%3==0 && n%5==0) {
        console.log("FizzBuzz");
        
    }
    else if (n%3==0) {
        console.log("Fizz");}

        else if(n%5==0)
        { console.log( "Buzz");}
        else{console.log(n);}
    
    
}

// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
function multiply(numArray){

let emptyr=[]
for (let n = 0; n < numArray.length; n++) {
    let x = numArray[n] *4;
    emptyr.push(x)     
}
   return emptyr
    
}
const four= multiply(numArray)
console.log(four);

// 6
// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
let nums = ["10","24","45","56","67"]
function transform(nums) {
return nums.map(Number)
  }
const ar= transform(nums)
console.log(ar);



