const aArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.table(aArray);
let indexi = Math.round(aArray.length / 2) - 1
let indexj = indexi + 1

while (indexi >= 0 && indexj < aArray.length) {
  //console.log(aArray[index]);
  console.log(aArray[indexi--], aArray[indexj++]);
}
