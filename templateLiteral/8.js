// ループを使いこなそう

const data = [1, 4, 2, 5, 3];
const fruits = {
  banana: 'バナナ',
  apple: 'リンゴ',
  orange: 'オレンジ'
};

Object.prototype.additionalFn = function() {};

for(let i = 0; i < data.length; i++) {
  console.log(i, data[i]);
}

// for(let i in data) {
//   console.log(i, data[i]);
// }

for(let i in fruits) {
  if(fruits.hasOwnProperty(i)) {
    console.log(i, fruits[i]);
  }
}

let keyFruits = Object.entries(fruits);
console.log(keyFruits);
for(let [key, value] of keyFruits) {
  console.log(key, value)
}


data.forEach((value, index, array) => {
  console.log(value, index, array);
})

const newData = data.map((value, index, array) => {
  return value * 2;
})
console.log('data', data);
console.log('map', newData);



const objectData = Object.keys(fruits).map((value, index, array) => {
  return value + 'aaaaa';
})
console.log('objectをmapでループ', objectData)


const filterData = data.filter((value, index, array) => {
  return value === 1;
})
console.log('filterData', filterData);



const reduceData = data.reduce((accu, curr) => {
  console.log('accu', accu, 'curr', curr);
  return accu + curr;
})


const sortData = data.sort((a, b) => {
  return b - a;
})
console.log('sortData', sortData);



const chainData = data.map(v => v + 1).sort((a, b) => {
  return b - a;
})
console.log('chainData', chainData);
