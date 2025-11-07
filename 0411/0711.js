//Function to slice book by pages 

const fs = require('node:fs');
const { start } = require('node:repl');
const { isNumberObject } = require('node:util/types');

  const data = fs.readFileSync(
    '0411/texxt.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

const COUNT_PER_PAGE = 800

function countPages( fileLenth){
    if (typeof fileLenth !== 'number' || typeof COUNT_PER_PAGE !== 'number'){
      return 0
    }
    if (COUNT_PER_PAGE == 0){
      return 0
    }
    if (COUNT_PER_PAGE < 0 ){
      COUNT_PER_PAGE = Math.abs(COUNT_PER_PAGE)
    }    
    return Math.ceil(fileLenth/COUNT_PER_PAGE)  
 }
 //countOfPages = countPages(data.length, 1000)
 //console.log(countOfPages)

 function slicePages(file, page){
  if (page == 0){
    return 'Page 0 Doesn`t exist'
  }
  if (page > countPages(file.length)){
    return 'Page doesn`t exist'
  }
  if (page < 0 ){
      page = Math.abs(page)
    }        

    let startSliceIndex = (page-1)*COUNT_PER_PAGE;
    
    if (page > 1){
        while (startSliceIndex < file.length && file[startSliceIndex] !== ' ' ) {
            startSliceIndex++;
        }
    }
    

    let endSliceIndex = page*COUNT_PER_PAGE;

    while (endSliceIndex < file.length && file[endSliceIndex] !== ' ') {
        endSliceIndex--; 
    }

    console.log("Page", page);
    return file.slice(startSliceIndex, endSliceIndex);
}

 pageText = slicePages(data, 555)
 console.log(pageText)
