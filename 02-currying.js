{
  // function sum(a, b) {
  //   return a + b;
  // }

  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

{
  // function sum(a) {
  //   return function (b) {
  //     return a + b;
  //   };
  // }

  const sum = (a) => (b) => a + b;

  console.log(sum(2)(3));

  const sumTwo = sum(2);

  console.log(sumTwo(3));
}

{
  const numbers = [1, 2, 3, 4, 5];

  // const sum = (a, b) => a + b
  // console.log(numbers.map(num => sum(num, 2)))

  const sum = (a) => (b) => a + b;
  const sumTwo = sum(2);
  console.log(numbers.map(sumTwo));
}
