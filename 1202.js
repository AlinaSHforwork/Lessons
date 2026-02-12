import { createReadStream, createWriteStream } from 'node:fs';

const readfile = createReadStream('file.txt', { encoding: 'utf8', highWaterMark: 50 });

readfile.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// count number of symbols
let symbolCount = 0
// let symbolAlphabet = [{a: 0}, {b: 0}, {c: 0}, {d: 0}, {e: 0}, {f: 0}, {g: 0}, {h: 0}, {i: 0}, {j: 0}, {k: 0}, {l: 0}, {m: 0}, {n: 0}, {o: 0}, {p: 0}, {q: 0}, {r: 0}, {s: 0}, {t: 0}, {u: 0}, {v: 0}, {w: 0}, {x: 0}, {y: 0}, {z: 0}]
let symbolAlphabet = {};
let words = []
let remainder = '';
let wordsAlphabet = {}

readfile.on('data', (chunk) => {
    // Symbols
    let text = remainder + chunk.toString('utf-8');

    const lastSpace = Math.max(text.lastIndexOf(' '), text.lastIndexOf('\n'), text.lastIndexOf('\t'));
    
    if (lastSpace !== -1) {
        remainder = text.slice(lastSpace + 1);
        text = text.slice(0, lastSpace + 1);
    } else {
        remainder = '';
    }

    const nonWhitespace = text.match(/\S/g) || [];
    symbolCount += nonWhitespace.length;

    for(const i in chunk){
        let char = chunk[i]
        if (chunk[i] !== ' ' && chunk[i] !== '\n' && chunk[i] !== '\t') {
            symbolAlphabet[char] = (symbolAlphabet[char] || 0) + 1;
        }
        /*
        if (chunk[i] !== ' ' && chunk[i] !== '\n' && chunk[i] !== '\t') {
            if (!symbolAlphabet[chunk[i]]) {
                symbolAlphabet[chunk[i]] = 1;
            } else {
                symbolAlphabet[chunk[i]]++;
            }
        }
        */
    }
    // words
    const foundWords = text.match(/[\p{L}\p{N}]+/gu) || [];
    words.push(...foundWords);
    /*
    for (const i in chunk){ 
        if (chunk[i] === ' ' || chunk[i] === '\n' || chunk[i] === '\t') {
            if (chunk.slice(j, i).trim() !== '') {
                words.push(chunk.slice(j, i));
            }
            j = Number(i) + 1;
        }
    }
    */    
});

readfile.on('end', () => {
    /* for Їжак or another last word */
    if (remainder) {
        const lastWords = remainder.match(/[\p{L}\p{N}]+/gu) || [];
        words.push(...lastWords);
        
        const lastChars = remainder.match(/\S/gu) || [];
        symbolCount += lastChars.length;
        for (const char of lastChars) {
            symbolAlphabet[char] = (symbolAlphabet[char] || 0) + 1;
        }
    }

    for (const word of words){
        wordsAlphabet[word] = (wordsAlphabet[word] || 0) + 1;
        
    }
    
    console.log(`Total number of symbols: ${symbolCount}`);
    console.log(`Symbol counts:`, symbolAlphabet);
    console.log(`Words:`, words)
    console.log(`Words count:`, wordsAlphabet)
});
