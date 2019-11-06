let myObj = {
  id: 2,
  printId() {
    console.log(this.id);
  }
}

myObj.printId();

const sayFoo = function() {
  console.log(this['foo']);
}

foo = 'foo';

const mySecondObj = {
  foo: "I'm in the obj",
  sayFoo
}

// sayFoo()  こっちはグローバル変数のfooをthisが指す
// mySecondObj.sayFoo() こっちはmySecondObjのfooをthisが指す

function MyObj(id) {
  this.id = id;
}

// const newInstance = new MyObj(5);

class MyClass {
  constructor(id) {
    this.id = id;
  }

  printId(id) {
    console.log(this.id);   // クラスを使ったthisはインスタンス化されたオブジェクトを指す
  }
}

const newInstance = new MyObj(5);

const outer = {
  func1: function() {
    console.log(this);  // outerオブジェクトを指す
    let _that = this;  // 変数に格納しておくと、子の中でもouterオブジェクトを参照できる

    const func2 = function() {
      console.log(this);     // 関数の入れ子になるとthisはwindowオブジェクトを指す
      console.log(_that);
    }
  }
}
