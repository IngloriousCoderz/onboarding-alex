// hello world -> HELLO WORLD -> HELLO WORLD! -> <p>HELLO WORLD!</p>

const shout = (message) => message.toUpperCase();
const punctuate = (mark) => (message) => message + mark;
const html = (tag) => (message) => `<${tag}>${message}</${tag}>`;

const exclamate = punctuate("!");
const p = html("p");

console.log(shout("hello world"));
console.log(punctuate("!")("HELLO WORLD"));
console.log(exclamate("HELLO WORLD"));
console.log(html("p")("HELLO WORLD!"));
console.log(p("HELLO WORLD!"));

console.log(html("p")(punctuate("!")(shout("hello world"))));
console.log(
  //
  p(
    //
    exclamate(
      //
      shout(
        //
        "hello world"
      )
    )
  )
);

let result = "hello world";
result = shout(result);
result = exclamate(result);
result = p(result);

console.log(result);

// (f o g)(x) => f(g(x))
// (f | g)(x) => g(f(x))

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const htmlize = pipe(shout, exclamate, p);

console.log(htmlize("hello world"));

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

console.log(compose(p, exclamate, shout)("hello world"));
