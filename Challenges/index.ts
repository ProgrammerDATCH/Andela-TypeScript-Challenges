//Prime
const arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterPrime = (arrNumbers: number[]) => {
    const primeNumbers: number[] = []
    for (let index = 0; index < arrNumbers.length; index++) {
        const currNumber: number = arrNumbers[index];
        let isPrime: boolean = true;

        if (currNumber === 1 || currNumber === 0) {
            isPrime = false;
        }
        else {
            for (let i = 2; i <= Math.sqrt(currNumber); i++) {
                if (currNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primeNumbers.push(currNumber);
        }

    }
    return primeNumbers;
}

// console.log(filterPrime(arrNumbers))

// 2. Palindrome
function isPalindrome(txt: string){
    txt = txt.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isTxtPalindrome =  (txt == txt.split('').reverse().join(''))
    return (isTxtPalindrome ? `${txt} - is a palindrome.`: `${txt} - is NOT a palindrome.`)
}

// console.log(isPalindrome("eye"))
// console.log(isPalindrome("This"))
// console.log(isPalindrome("Ey@e-"))


// 3. Array Reversed
interface Arr extends Array<string | number> {}
function reverseArray(arr: Arr){
    let reverseArray: Arr = [];
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray
}
// console.log(reverseArray([".", " old ", " Years ", 23, "I am "]))

//4. Reverse inplace Array
type ArrElement = string | number;

function reverseInplaceArray(arr: Arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp: ArrElement = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
// console.log(reverseInplaceArray([".", " old ", " Years ", 24, "I am "]))

//5. Formated Object
type PersonInfo = { 'second-name': string; age: number };

interface Result {
    females: Record<string, PersonInfo>;
    males: Record<string, PersonInfo>;
}

function formatArray(arr: string[]): Result {
    let result: Result = { females: {}, males: {} };

    arr.forEach(person => {
        let [fullName, ageStr, gender] = person.split(', ');
        let [firstName, secondName] = fullName.split(' ');

        let age = parseInt(ageStr);
        let personInfo: PersonInfo = { 'second-name': secondName, age };

        if (gender === 'female') {
            result.females[firstName] = personInfo;
        } else if (gender === 'male') {
            result.males[firstName] = personInfo;
        }
    });

    return result;
}

let people = [
    "David Shema, 23, male",
    "Diane Mimi, 21, female",
    "Dodos deck, 21, male"
];

console.log(formatArray(people));