let numArr = []
   for (let i = 0; i < 6000000; i++) {
      numArr[i] = Math.round(Math.random() * 100 - 50);
   }
   console.time(sorting)
   

   console.log(numArr)
   let i = 1
   for(let star = 0; star < numArr.length -1 ; star++){
  for (let i = star + 1 ; i < numArr.length; i++) {
     if (numArr[star] >= numArr [i]){
         let temp = numArr[star] 
         numArr[star] = numArr[i]
         numArr[i] = temp
         
     }
   }
  }
   
//console.log(numArr)
console.timeEnd(sorting)
