// new EvalError();
// new EvalError("Eval Error message");

// new RangeError();
// new RangeError("Range Error message");

// let score = {
//   checkerror: function (score: number) {
//     if (score < 0) {
//       try {
//         throw new EvalError("Error Occurred!!!!!!");
//       } catch (e: any) {
//         console.log(e.message);
//       }
//     }
//   },
// };
// console.log(score.checkerror(-3));

// function check(n: number) {
//   if (!(n >= -500 && n <= 500)) {
//     throw new RangeError("The argument must be between -500 and 500.");
//   }
// }
// try {
//   check(2000);
// } catch (e: any) {
//   console.log(e.message);
// }

function check2(value: string) {
  let items = ["apple", "banana", "carrot"];
  if (!items.includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".'
    );
  }
}

try {
  check2("Melon");
} catch (e: any) {
  if (e instanceof RangeError) {
    console.log(e.message);
  }
}
