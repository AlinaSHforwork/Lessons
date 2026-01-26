console.log("lesson 26.01.2026")

setTimeout(() => {
    console.log(">'^'<")
}, 1000);

const fs = require('node:fs');

async function readTxtFile(params) {
    const txt = await fs.promises.readFile('file.txt', 'utf8');
    console.log("DONE")
}

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
    });

readTxtFile()

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
});

myPromise.then((res) => {
    console.log(res)
})

setTimeout(() => {
    console.log("End of file")
}, 5000);
