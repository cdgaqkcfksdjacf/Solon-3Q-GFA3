function generateNumbers() {
    let num1 = Math.round(Math.random() * 20);
    let num2 = Math.round(Math.random() * 20);
    let num3 = Math.round(Math.random() * 20);
    return [num1, num2, num3];
}
function getBiggestNumber(numbers) {
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
return max;
}

function getLetter(num1) {
let alphabet = "abcdefghijklmnopqrstuvwxyz";
return alphabet[num1];
}

function getTime(num2, num3) {
let totalMinutes = num2 * num3;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
return `${hours}hr ${minutes}min`;
}

function playGame() {
let numbers = generateNumbers();
let maxNumber = getBiggestNumber(numbers);
let letter = getLetter(numbers[0]);
let time = getTime(numbers[1], numbers[2]);

alert(`The billionaire with the most money has ${maxNumber} billion dollars!\n\nThe 1st letter of the richest billionare is ${letter.toUpperCase()}.\n\nThe time of the fastest person who counted all of their money is ${time}.`);
}