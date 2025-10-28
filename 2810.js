const stringToEncrypt = 'Hello World!';
const shift = 5;

console.log('Original String:', stringToEncrypt);

function caesarCipher(str, shift) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
       if (char.match(/[a-zA-Z]/)) {
            let charCode = str.charCodeAt(i);
            if (char >= 'a' && char <= 'z'){
                base = 97 
            }
            else {
                base = 65
            }
            let newCharCode = ((charCode - base + shift) % 26 + base);
            result += String.fromCharCode(newCharCode);
        } else {
            result += char;
        }    
      
    }
    return result;
}

const encryptedString = caesarCipher(stringToEncrypt, shift);
console.log("Encrypted String:",encryptedString);