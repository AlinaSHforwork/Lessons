import { createReadStream, createWriteStream } from 'node:fs';
import fs from 'node:fs';
import { Transform } from 'node:stream';

const readfile = createReadStream('file.txt', { encoding: 'utf8', highWaterMark: 50 });

readfile.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
// Crop file.txt by sentences and write to output.txt

fs.createReadStream('file.txt').pipe(fs.createWriteStream('output.txt'))

const writefile = createWriteStream('remove.txt', { encoding: 'utf8' });

const removeSpaces = new Transform({
    transform(chunk, encoding, callback) {
        const modifiedChunk = chunk.toString().replace(/\s+/g, ' ');
        this.push(modifiedChunk);
        callback();
    }
});

readfile.pipe(removeSpaces).pipe(writefile);




