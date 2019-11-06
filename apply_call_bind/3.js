function greet() {
  console.log(arguments);
  // let slicedArray = [].slice.call(arguments);
  let slicedArray = [].slice.call(arguments, 0, 1);

  // let hi = `Hi, ${this.name}`;
  console.log(slicedArray);
}

let obj = {name: "Tom"}
greet.call(obj, 1, 2, 3);


const array = [1, 2, 3, 4];

console.log(Math.min.apply(null, array));
// console.log(Math.min(...array));

let myObj = {
  id: 42,
  print() {
    console.log(this);

    setTimeout(function() {
      console.log(this);
    }.bind(this), 1000);
  }
}

myObj.print();
