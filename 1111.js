const fs = require('node:fs');
const { isNumberObject } = require('node:util/types');

  const data = fs.readFileSync(
    '0411/texxt.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

const counters = {}

function symbolCounter(str){    
    for (let i = 0; i < str.length; i++){
        if (counters[data[i]] === undefined){
            counters[data[i]] = 0 
        }
        counters[data[i]] += 1
    }
    return counters
}

function sortCounter(counts) {
    const items = Object.entries(counts);
    items.sort(function(a, b){return b[1] - a[1]});
    return items; 
}

const symbolsSort = sortCounter(symbolCounter(data))

console.table(symbolsSort)
 


 