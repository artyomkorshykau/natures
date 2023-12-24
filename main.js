function invert(array) {
  return;
}
const array = [-1, 2, -3, 4, -5];
const massive = array;

const massiveLength = massive.length;
const newMassive = [];

for (let i = 0; i < massiveLength; i++) {
  const itog = massive[i];
  if (itog < 0) {
    const pushing = newMassive.push(itog);
  } else if (itog > 0) {
    const pushing = newMassive.push(-itog);
  }
}
console.log(newMassive);
