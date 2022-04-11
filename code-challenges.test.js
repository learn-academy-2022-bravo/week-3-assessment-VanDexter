// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]


// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Psuedo code
// function will take a array and add first two index then make it equal some.
// value of next array will be sum of first two plus one
// can use a .fill to make an array lenght
//  use .map to modify new array


describe("fibonacci", () => {
  it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

 // FAIL  ./code-challenges.test.js
 //  fibonacci
// ✕ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//
// ● fibonacci › Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

// b) Create the function that makes the test pass.

fibonacci = (number)=>{
    return new Array(number).fill(0).map((value,index, currentArray)=>{
        if (value > 2 ){
          return "pick a number greater than 2, yo"
        }else if (index === 0){
            currentArray[index] = 1;
        }else if(index === 1){
            currentArray[index] = 1;
        }else{
            currentArray[index] = currentArray[index-2]+currentArray[index-1];
        }
        return currentArray[index];
    });
}
//
// console.log(fibonacci(6))
// console.log(fibonacci(10))

// PASS  ./code-challenges.test.js
//  fibonacci
//    ✓ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// psuedo code
// create a function
// type of to find number
//  .filter iteration for odd numbers typeof
// sort odd numbers from least to greatest by comparing if value

// const numArry = fullArr1.filter(
//   value => typeof value === 'number'
// )
//
// const numOdds = numArry.filter(number => {
//   return number % 2 !==0
// })
//
// const numSort = numOdds.sort((a, b) => a - b)

describe("finishedArray", () => {
  it("Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    expect(finishedArray(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(finishedArray(fullArr2)).toEqual([-823, 7, 23])
  })
})

// FAIL  ./code-challenges.test.js
//  finishedArray
//    ✕ Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest
//
//  ● finishedArray › Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest

// b) Create the function that makes the test pass.

finishedArray = (n) => {
  let numArry = n.filter(
    value => typeof value === 'number')
 {numOdds = numArry.filter(number => {
  return number % 2 !==0})
}
return numSort = numOdds.sort((a, b) => a - b)
}

// console.log(finishedArray(fullArr1))
// console.log(finishedArray(fullArr2))

// PASS  ./code-challenges.test.js
//  finishedArray
//    ✓ Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// Expected output: []

// psuedo code
// create for loop
// have index1 + index2 = index2 loop ++


describe("cumulativeSum", () => {
  it("Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    expect(cumulativeSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(cumulativeSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(cumulativeSum(numbersToAdd3)).toEqual([])
  })
})

// FAIL  ./code-challenges.test.js
//  cumulativeSum
//    ✕ Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//
//  ● cumulativeSum › Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


// b) Create the function that makes the test pass.

const cumulativeSum = (num) => {
  for(let i = 1 ; i < num.length ; i++) {
        num[i] = num[i] + num[i-1];
      }
       return num;
  }
  // console.log(cumulativeSum(numbersToAdd1));
  // console.log(cumulativeSum(numbersToAdd2));
  // console.log(cumulativeSum(numbersToAdd3));

 //  PASS  ./code-challenges.test.js
 // cumulativeSum
 //   ✓ Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)
