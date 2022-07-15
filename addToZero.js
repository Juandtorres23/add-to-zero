// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

const equalZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === 0) {
            return true
        }
    } return false
}

console.log(equalZero(array))