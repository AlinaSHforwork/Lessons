const fs = require('node:fs');
const { isNumberObject } = require('node:util/types');

  const data = fs.readFileSync(
    '0411/texxt.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

 // console.log(data.replaceAll(" ", "(Alina Shvryd >'^'<)"));  


 function countPages( fileLenth , countPerPage){
    if (typeof fileLenth !== 'number' || typeof countPerPage !== 'number'){
      return 0
    }
    if (countPerPage == 0){
      return 0
    }
    if (countPerPage < 0 ){
      countPerPage = Math.abs(countPerPage)
    }    
    return Math.ceil(fileLenth/countPerPage)  
 }
 //countOfPages = countPages(data.length, 1000)
 //console.log(countOfPages)

 function slicePages(file, page, countPerPage){
  if (page == 0){
    return 'Page 0 Doesn`t exist'
  }
  if (page > countPages(file.length, countPerPage)){
    return 'Page doesn`t exist'
  }
  if (page < 0 ){
      page = Math.abs(page)
    }    
    console.log("Page", page)
    return file.slice((page-1)*(countPerPage),page*countPerPage)
 }

 pageText = slicePages(data, 44, 1000 )
 console.log(pageText)