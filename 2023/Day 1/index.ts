// This is most likely not the fastest or most efficient way to do this
// I've already seen better, But it works and gives me the results I wanted

import { readFileSync } from "fs";

const input = readFileSync("data.txt", { encoding: "utf8" });
const lines = input.trimEnd().split("\n");

console.log(`Part 1 solution: ${partOne(lines)}`);
console.log(`Part 2 solution: ${partTwo(lines)}`);

function partOne(input: string[]) {
  return input.reduce((a, b) => {
    const removeAlpha = b.replace(/\D/g, "");

    const number = Number(removeAlpha[0] + removeAlpha[removeAlpha.length - 1]);

    return a + number;
  }, 0);
}

function partTwo(input: string[]) {
  return partOne(input.map(replaceNumberWords));
}

function replaceNumberWords(string: string) {
  return string
    .replaceAll("one", "one1one")
    .replaceAll("two", "two2two")
    .replaceAll("three", "three3three")
    .replaceAll("four", "four4four")
    .replaceAll("five", "five5five")
    .replaceAll("six", "six6six")
    .replaceAll("seven", "seven7seven")
    .replaceAll("eight", "eight8eight")
    .replaceAll("nine", "nine9nine");
}

// My original solution for part 1
// Whilst there was nothing really wrong with it, I wasn't too happy with it

/** let totalAmount = 0;
  * input.forEach(item => {
  *   const newItem = item
  *     .replace(/\D/g, '')

  *   const number = Number(newItem[0] + newItem[newItem.length - 1]);

  *   totalAmount += !isNaN(number) ? number : 0;
  * // Theres no NaNs in the data, 
  * // but I think it still makes sense to handle if there *was*
  * })
  *
  * return totalAmount;
  */
