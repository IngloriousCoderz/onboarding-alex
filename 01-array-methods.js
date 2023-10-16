const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

for (const item of numbers) {
  console.log(item);
}

numbers.forEach((item, i, arr) => {
  console.log(item, i, arr);
});

// short-circuit
numbers.forEach(console.log);

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares);
}

{
  // const squares = numbers.map((item) => square(item))
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens);
}

{
  // const evens = numbers.filter((item) => isEven(item));
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven;
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven);
}

{
  // const firstEven = numbers.find((item) => isEven(item))
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// firstEvenIndex: [1, 2, 3, 4, 5] -> 1

{
  let firstEvenIndex;
  numbers.forEach((item, i) => {
    if (firstEvenIndex == null && isEven(item)) {
      firstEvenIndex = i;
    }
  });
  console.log(firstEvenIndex);
}

{
  // const firstEven = numbers.findIndex((item) => isEven(item))
  const firstEven = numbers.findIndex(isEven);
  console.log(firstEven);
}

// hasEven: [1, 2, 3, 4, 5] -> true

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  // const firstEven = numbers.some((item) => isEven(item))
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEven: [1, 2, 3, 4, 5] -> true

{
  let allEven = true;
  numbers.forEach((item) => {
    if (!isEven(item)) {
      allEven = false;
    }
  });
  console.log(allEven);
}

{
  // const firstEven = numbers.some((item) => isEven(item))
  const hasEven = numbers.every(isEven);
  console.log(hasEven);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0;
  numbers.forEach((item) => {
    summation += item;
  });
  console.log(summation);
}

{
  const [firstItem, ...rest] = numbers;
  let summation = firstItem;
  rest.forEach((item) => {
    summation += item;
  });
  console.log(summation);
}

{
  // const summation = numbers.reduce((acc, item) => {
  //   acc += item;
  //   return acc;
  // }, 0);
  const summation = numbers.reduce(sum);
  console.log(summation);
}

// summationOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let summation = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      summation += square(item);
    }
  });
  console.log(summation);
}

{
  const evens = numbers.filter(isEven);
  const squares = evens.map(square);
  const summation = squares.reduce(sum);
  console.log(summation);
}

{
  const summation = numbers //
    .filter(isEven)
    .map(square)
    .reduce(sum);
  console.log(summation);
}

// summationOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  let summation = 0;
  numbers.forEach((item) => {
    const squared = square(item);
    if (isEven(squared)) {
      summation += squared;
    }
  });
  console.log(summation);
}

{
  const summation = numbers //
    .map(square)
    .filter(isEven)
    .reduce(sum);
  console.log(summation);
}
