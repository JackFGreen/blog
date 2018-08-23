// for (let i = (setTimeout(() => console.log('a->', i)), 0);
//   setTimeout(() => console.log('b->', i)), console.log('step 1', i), i < 2;
//   console.log('step 4', i), i++, console.log('step 5', i)) {
//   console.log('step 2', i)
//   i++
//   console.log('step 3', i)
// }

for (let i = (setTimeout(() => console.log('a->', i)), 0);
  setTimeout(() => console.log('b->', i)), console.log('step 1', i), i < 2;
  console.log('step 4', i), i++, console.log('step 5', i)) {
  console.log('step 2', i)
  i=10
  console.log('step 3', i)
}
