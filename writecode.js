//Write a function that takes in an array of numbers. The function should return
//True i any two numbers in list sum to 0, and false otherwise.

const arr1 =[1,2,3,-2]

const arr2 =[1,2,3.5,-8]
const sumsZero = (arr)=> {
    let answer = false
    for (let i=0; i<arr.length; i++ ){
        for (j= i+1; j<arr.length; j++){
            if (arr[i] +arr[j] ===0) {
                answer = true 
            }
            
        }
    }
    console.log(answer)
}
sumsZero(arr1)
sumsZero(arr2)

//Write a function that takes in a single word, as a string. 
//It should return True if that word contains only unique characters. Return False otherwise.

const str1 = "monday"
const str2 = "fdlgferfew"
const hasUniqueChars = (str) => {
  let letters=[]
  let isUnique=true
  for (let i=0; i <str.length; i++){
    if (letters.includes(str[i])){
        isUnique = false
    } else {
        letters.push (str[i])

    }
  }
  console.log(isUnique)
}
hasUniqueChars(str1)
hasUniqueChars(str2)

//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.
//For example:
//isPangram("The quick brown fox jumps over the lazy dog!");
// -> True
//isPangram("I like cats, but not mice");
// -> False

const str3 = "The quick brown fox jumps over the lazy dog!"
const str4 = "I like cats, but not mice"
const pangram = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    let ispangram = true;
    for ( i=0; i<alphabet.length; i++){
        if ( str.indexOf(alphabet[i])<0){
            ispangram = false
        }
    } 
    console.log(ispangram)
}
pangram(str3)
pangram(str4)