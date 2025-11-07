const fs = require('node:fs');
const { isNumberObject } = require('node:util/types');

  const data = fs.readFileSync(
    '0411/texxt.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

 console.log(data.replaceAll(" ", "(Alina Shvryd >'^'<)"));  


 