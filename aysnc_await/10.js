// acync function sample() {
//   const num = await ayncFn();
//   num++;
//   return num;
// }

asyncFn(0).then(num => {
  let num = 0;
  try {
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
  } catch (e) {
    throw new Error('Error is occured', e);
  }
  return num;
})
