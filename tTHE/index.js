function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example:
console.log(reverseString("hello")); // Output: "olleh"
function countCharacters(str) {
    return str.length;
}

// Example:
console.log(countCharacters("hello world")); // Output: 11
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example:
console.log(capitalizeWords("hello world")); // Output: "Hello World"


function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example:
console.log(findMax([1, 5, 3, 9])); // Output: 9
console.log(findMin([1, 5, 3, 9])); // Output: 1

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example:
console.log(sumArray([1, 2, 3, 4])); // Output: 10

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example: filter out numbers less than 5
console.log(filterArray([1, 5, 8, 3], num => num >= 5)); // Output: [5, 8]

function factorial(n) {
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Example:
console.log(factorial(5)); // Output: 120
function isPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

// Example:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

function fibonacci(n) {
    let sequence = [0, 1];
    for(let i = 2; i < n; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence.slice(0, n);
}

// Example:
console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
