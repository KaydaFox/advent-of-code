import { readFileSync } from "fs";

const input = readFileSync("data.txt", { encoding: "utf8" });
const lines = input.split("\n");

const gameIdRegex = /Game (\d+):/;

console.log(`Part one: ${partOne()}`);
console.log(`Part two: ${partTwo()}`);

function partOne() {
  const passedGameIds: number[] = [];

  lines.forEach((line: string) => {
    const gameId = (line.match(gameIdRegex) as string[])[1];

    const gameResults = line.replace(gameIdRegex, "").split(";");

    for (const gameResult of gameResults) {
      const result = countColours(gameResult.trim());

      if (result.red > 12 || result.green > 13 || result.blue > 14) return;
    }

    passedGameIds.push(Number(gameId));
  });

  return calculateSum(passedGameIds);
}

function partTwo() {
  const allPowers: number[] = lines.map((line) => {
    const gameResults = line.replace(gameIdRegex, "").split(";");

    const colours = {
      red: 0,
      green: 0,
      blue: 0,
    };

    for (const gameResult of gameResults) {
      const { red, green, blue } = countColours(gameResult.trim());

      if (red > colours.red) colours.red = red;
      if (green > colours.green) colours.green = green;
      if (blue > colours.blue) colours.blue = blue;
    }
    return colours.red * colours.green * colours.blue;
  });

  return calculateSum(allPowers);
}

function countColours(gameResult: string) {
  const colourCounts = {
    red: 0,
    green: 0,
    blue: 0,
  };

  gameResult
    .split(",")
    .map((part) => part.trim())
    .forEach((part) => {
      const [number, color] = part.split(" ");

      colourCounts[color as "red" | "green" | "red"] = parseInt(number);
    });

  return colourCounts;
}

function calculateSum(data: number[]) {
  return data.reduce((a, b) => {
    return a + b;
  }, 0);
}
