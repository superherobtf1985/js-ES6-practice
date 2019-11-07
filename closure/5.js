let increment = (function () {
  let counter = 0;

  return function() {
    counter += 1;
    console.log(counter)
  }
})();

// ここからcounterの値をいじれないようにしている
increment();
increment();
increment();

function addStringFactory(tail) {
  return function(str) {
    return str + tail;
  };
}

let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');

let str = 'Tom';
str = addAs(str);
console.log(str);
