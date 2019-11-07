function wait(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      if (num == 2) {
        reject(num);
      } else {
        resolve(num);
      }
    }, 1000);
  });
}

// コールバック地獄
// wait(num => {
//   num++;
//   wait(num => {
//     num++;
//     wait(num => {
//       num++;
//     }, num);
//   }, num);
// }, 0);


wait(0).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).catch(num => {
  console.error(num, 'error');
})

Promise.race([wait(1000), wait(1500), wait(2000)]).then(nums => {
  console.log(nums);
})



