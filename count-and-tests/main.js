import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function startApp() {
    const rl = readline.createInterface({ input, output });

    const countSymbols = (await rl.question('Count symbols? (y/n): ')).toLowerCase() === 'y';
    const countWords = (await rl.question('Count words? (y/n): ')).toLowerCase() === 'y';
    const countSentences = (await rl.question('Count sentences? (y/n): ')).toLowerCase() === 'y';

    console.log('\nPaste your text below');
    console.log('Press Ctrl+D\n');

    rl.close();
    process.stdin.resume(); 

    let symbolCount = 0;
    let symbolAlphabet = {};
    let words = [];
    let remainder = '';
    let sentenceRemainder = '';
    let sentences = [];

    function symbols (chunkStr){
        const nonWhitespace = chunkStr.match(/\S/g) || [];
        symbolCount += nonWhitespace.length;
        for (const char of chunkStr) {
            if (char !== ' ' && char !== '\n' && char !== '\t') {
                symbolAlphabet[char] = (symbolAlphabet[char] || 0) + 1;
            }
        }
    }

    function wordsCounter (chunkStr){
        let text = remainder + chunkStr;
        const lastSpace = Math.max(text.lastIndexOf(' '), text.lastIndexOf('\n'), text.lastIndexOf('\t'));
        if (lastSpace !== -1) {
            remainder = text.slice(lastSpace + 1);
            text = text.slice(0, lastSpace + 1);
        } else {
            remainder = text; 
            text = '';
        }
        const foundWords = text.match(/[\p{L}\p{N}]+/gu) || [];
        words.push(...foundWords);
    }

    function sentencesCounter (chunkStr){
        let textSen = sentenceRemainder + chunkStr;
        let parts = textSen.split(/(?<=[.!?])\s+/);
        sentenceRemainder = parts.pop() || ''; 
        for (const s of parts) {
            const trimmed = s.trim();
            if (trimmed) sentences.push(trimmed);
        }
    }

    process.stdin.on('data', (chunk) => {
        const chunkStr = chunk.toString('utf-8');
        if (countSymbols) symbols(chunkStr);
        if (countWords) wordsCounter(chunkStr);
        if (countSentences) sentencesCounter(chunkStr);
    });

    process.stdin.on('end', () => {
        console.log('\nRESULTS:');
        if (countSymbols) {
            console.log(`Total Symbols (non-whitespace): ${symbolCount}`);
            console.log(`Symbol Alphabet:`, symbolAlphabet);
        }
        if (countWords) {
            if (remainder) {
                const lastWords = remainder.match(/[\p{L}\p{N}]+/gu) || [];
                words.push(...lastWords);
            }
            let wordsAlphabet = {};
            for (const word of words) {
                wordsAlphabet[word] = (wordsAlphabet[word] || 0) + 1;
            }
            console.log(`Total Words: ${words.length}`);
            console.log(`Unique Words:`, Object.keys(wordsAlphabet).length);
            console.log(`Words:`, wordsAlphabet);
        }        
        if (countSentences) {
            if (sentenceRemainder && sentenceRemainder.trim()) {
                sentences.push(sentenceRemainder.trim());
            }
            console.log(`Total Sentences: ${sentences.length}`);
            console.log(`Sentences:`, sentences);
        }
        process.exit(); 
    });
}
//startApp();