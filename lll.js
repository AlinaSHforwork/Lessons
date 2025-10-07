let numArr = []
for (let i = 0; i < 10; i++) {
  numArr[i] = Math.round (Math.random() * 100 - 50);
}
console.log("numArr array:",numArr)


let meineArr = [5, 3, -8, 1, -2]
console.log("meineArr array:",meineArr)

let matrixArr = [
  [1, -2, 3],
  [-4, 5, 6],
  [7, 8, -9]
]
console.log("matrixArr array:",matrixArr)



let i = 1
function sortingArray (ARAY){
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



function sortingMatrix (matrix){   
    let ARAY = matrix.flat()
    
    for(let star = 0; star < ARAY.length -1; star++){
  for (let i = star + 1; i < ARAY.length; i++) {
    if (ARAY[star] >= ARAY [i]){
      let temp = ARAY[star]
      ARAY[star] = ARAY[i]
      ARAY[i] = temp
    }
  }
}
    let k = 0;
for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = ARAY[ k++];
        }
    }
    return matrix;
}

function sorting (list){
  for (let i = 0; i < list.length; i++) {
    if (!Array.isArray(list[i])) {
      return sortingArray(list)
    }
  }     
  return sortingMatrix(list) 
}


console.log("sorted numArr array:",sorting(numArr))
console.log("sorted meineArr array:",sorting(meineArr))
console.log("sorted matrixArr array:",sorting(matrixArr))
