const fs = require('node:fs');

  const data = fs.readFileSync(
    '0411/texxt.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

  console.log(data.replaceAll(" ", "(Alina Shvryd >'^'<)"));  
