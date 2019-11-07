class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  introduce() {
    console.log('My name is' + this.first + ' ' + this.last);
  }
}

class Japanese extends Person {
  constructor(first, last) {
    super(first, last);
    this.lang = 'ja';
    this._age = 0;
  }
  sayJapanese() {
    console.log('こんにちは' + this.first + ' ' + this.last);
  }

  static sayHello(value) {
    console.log('こんにちは', value);
  }

  set setAge(value) {
    this._age = value;
  }

  get getAge() {
    return this._age;
  }
}


// function factoryPerson(first, last) {
//   let person = {first, last};
//   return person;
// }

// let me = factoryPerson('First', 'Last');
// let me1 = factoryPerson('First', 'Last');
// let me2 = factoryPerson('First', 'Last');
// let me3 = factoryPerson('First', 'Last');



// function Person(first, last) {
//   this.first = first;
//   this.last = last;
// }

// function Japanese(first, last) {
//   Person.call(this, first, last);
//   this.lang = 'ja';
// }

// Object.setPrototypeOf(Japanese.prototype, Person.prototype);

// introduceの中身を外から書き換えられないようにする
// Person.prototype.introduce = function() {
//   console.log('My name is' + this.first + ' ' + this.last);
// }

// Japanese.prototype.sayJapanese = function() {
//   console.log('こんにちは' + this.first + ' ' + this.last);
// }

// let me0 = new Person('First', 'Last');
// let me4 = new Person('Me4', 'Desu');
//
// me0.introduce();
// me4.introduce();

let me = new Japanese('jiro', 'sato');
me.introduce();

Japanese.sayHello('First');

console.log(me.getAge);
me.setAge = 10;
console.log(me.getAge);
