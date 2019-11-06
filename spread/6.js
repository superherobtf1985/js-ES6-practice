function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers))  // スプレッド構文。配列を引数として渡せる

console.log(sum.apply(null, numbers))

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);


let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

console.log({ ...obj1 });
console.log({ ...obj1, ...obj2 });


function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));


function f(a) {
  let args = Array.prototype.slice.call(arguments, f.length)
  console.log(args);
}
f(1, 2, 3);

function f(a, ...args) {   // これは上の関数と同じ
  console.log(args);
}
f(1, 2, 3);
