//Prime
const arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterPrime = (arrNumbers: number[]): number[] => {
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
function isPalindrome(txt: string): string{
    txt = txt.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isTxtPalindrome: boolean =  (txt == txt.split('').reverse().join(''))
    return (isTxtPalindrome ? `${txt} - is a palindrome.`: `${txt} - is NOT a palindrome.`)
}

// console.log(isPalindrome("eye"))
// console.log(isPalindrome("This"))
// console.log(isPalindrome("Ey@e-"))


// 3. Array Reversed
interface Arr extends Array<string | number> {}
function reverseArray(arr: Arr): Arr{
    let reverseArray: Arr = [];
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray
}
// console.log(reverseArray([".", " old ", " Years ", 23, "I am "]))

//4. Reverse inplace Array
type ArrElement = string | number;

function reverseInplaceArray(arr: Arr): Arr {
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

// console.log(formatArray(people));


// 6. Sorting Array
function isPrime(num: number):boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function customSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp: number = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(customSort([10, 5, 3, 8, 7, 2, 6]));




// 7. majorityArray
function hasMajorityElement(arr: number[]): boolean {
    const counts: Record<number, number> = {};
    for (let i = 0; i < arr.length; i++) {
        const num: number = arr[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > arr.length / 2) {
            return true;
        }
    }
    return false;
}

// console.log("[3, 1, 3, 4, 3] has majority element? => ", hasMajorityElement([3, 1, 3, 4, 3])); 
// console.log("[3, 1, 3, 4, 4] has majority element? => ", hasMajorityElement([3, 1, 3, 4, 4]));







// 8. AsynchJS
interface student{
    name: string;
    age?: number;
}
const setStudentAgeApi = (student: student, age: number): Promise<student> => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                  resolve(student)
        },
            500);
    });
 }

// let student = { name: "denis" }
// console.log("Loading student DATA...")
// setStudentAgeApi(student, 23).then(res=>{
//     console.log(res)
// }).catch(err => console.log(err))





// 9. AsynchJS
interface familyObject{
    fatherName: string;
    MotherName: string;
    childrenNumber: number;
    totalNumberOfFamilyMembers?: number;
}
const setFamilyApi = async (arr: familyObject[]): Promise<familyObject[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < arr.length; i++) {
                arr[i].totalNumberOfFamilyMembers = arr[i].childrenNumber + 2;
                if (arr[i].fatherName.toLowerCase() === "yves") reject("Yves is not an allowed dad in 2022.")
            }
            resolve(arr);
        }, 1000);
    });
}

let families = [
    {
        fatherName: "David",
        MotherName: "Noella",
        childrenNumber: 4,
    },
    {
        fatherName: "Emmy",
        MotherName: "Ange",
        childrenNumber: 6,
    },
    {
        fatherName: "Yves",
        MotherName: "Rachel",
        childrenNumber: 2,
    }
];

// (async () => {
//     console.log("Waiting Family DATA...")
//     try {
//         const family = await setFamilyApi(families);
//         console.log(family);
//     } catch (error) {
//         console.error(error);
//     }
// })();