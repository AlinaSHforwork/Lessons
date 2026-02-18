//import {symbolAlphabet, wordsAlphabet} from './1202.js'
import { createReadStream } from 'node:fs';
import exit from 'node:process'
import path from 'path'
import { execSync } from 'child_process'

const filePath = '/home/alina/code/Lessons/1802.js'
const parsed = path.parse(filePath)

const readfile = createReadStream('simpl.txt', { encoding: 'utf8', highWaterMark: 50 });

readfile.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

let sorted = []

readfile.on('error', (error) => {
    const output = execSync('ls', { encoding: 'utf-8' });
    //throw new Error("Your error:",error)
    console.error("ERROR\n",error,`${parsed.base}\n\n`, 'Choose one of your file:\n\n',output )
});

readfile.on('data', (chunk) => {
const obj = {a: 1, b: 2, c: 5, d: 3}
console.log(Object.entries(obj))
console.log(Object.values(obj))
console.log(Object.keys(obj))

sorted = Object.entries(obj).sort(function(a, b){return a[1] - b[1]}); 
/*
let sortedSymAlphabet = Object.entries(symbolAlphabet).sort(function(a, b){return a[1] - b[1]}); 
console.log('Sorted',sortedSymAlphabet)

let sortedWordAlphabet = Object.entries(wordsAlphabet).sort(function(a, b){return a[1] - b[1]}); 
console.log('Sorted',sortedWordAlphabet)
*/
});

readfile.on('end', () => {
    console.log('Sorted',sorted)
});