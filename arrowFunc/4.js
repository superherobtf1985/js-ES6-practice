const timesTwo = i => i * 2;

const res = timesTwo(2);
console.log(res);

// アロー関数の書き方
// let arrowFn;
// arrowFn = () => 42;
// arrowFn = x => 42;
// arrowFn = (x, y) => 42;
// arrowFn = (x, y) => {
//   console.log(x + y);
//   return x * y;
// }

let normalFn;
normalFn = {
  id: 42,
  counter: function() {
    console.log(this);

    window.setTimeout(function() {
      console.log(this);
    }, 1000);
  }
}

normalFn.counter();



window.me = 'global';
const outer = function() {
  let me = 'outer';

  return {
    me: 'inner',
    say: () => {
      console.log(this.me);
    }
  }
}
outer().say();   // globalのthisが呼ばれる

// ===43行目はこれと同じ====
//   let me = 'outer';
//
//   return {
//     me: 'inner',
//     say: () => {
//       console.log(this.me);
//     }
//   }.say();
// ==========================

