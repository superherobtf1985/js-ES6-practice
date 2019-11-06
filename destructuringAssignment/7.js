//  タグ付きテンプレートリテラル

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

const { b: bb=1, a, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a);
console.log(bb);
console.log(rest);


function drawES2015Chart({size = 'big', coords = {x: 0, y:0}, radius = 251} = {})
{
  console.log(size, coords, radius);
}

drawES2015Chart();  // 引数なしで呼び出した場合、初期値が代入される

drawES2015Chart({
  coords: {x: 18, y:30},
  radius: 251
});


function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((accu, str, i) => {
    let val = values[i] ? `<b>${values[i]}</b>` : "";
  }, '');
}

const str1 = "Bob";
const str2 = "Tom";
const result = b`${str1} and ${str2}`;
console.log(result);
