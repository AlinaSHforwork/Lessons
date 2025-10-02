let numArr = []
for (let i = 0; i < 10; i++) {
  numArr[i] = Math.round (Math.random() * 100 - 50);
}
console.log("numArr array:",numArr)


let meineArr = [5, 3, -8, 1, -2]
console.log("meineArr array:",meineArr)

let i = 1

function sorting (ARAY){
  for(let star = 0; star < ARAY.length -1; star++){
  for (let i = star + 1; i < ARAY.length; i++) {
    if (ARAY[star] >= ARAY [i]){
      let temp = ARAY[star]
      ARAY[star] = ARAY[i]
      ARAY[i] = temp
    }
  }
}
return ARAY
}

console.log("sorted numArr array:",sorting(numArr))
console.log("sorted meineArr array:",sorting(meineArr))
