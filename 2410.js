const stringToEncrypt = 'Hello World!';
const shift = 5;
console.log('Original String:', stringToEncrypt);
function caesarCipher(str, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ", "!", "."];
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
        let currentIndex = alphabet.indexOf(str[i]);
        let newIndex = (currentIndex + shift);
        if (newIndex >= alphabet.length) {
            newIndex = (newIndex % alphabet.length);
        }
        result += alphabet[newIndex];            
        }    
    }
    return result;
}

const encryptedString = caesarCipher(stringToEncrypt, shift);
console.log("Encrypted String:",encryptedString);

function caesarDecipher(str, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ", "!", "."];
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
        let currentIndex = alphabet.indexOf(str[i]);
        let newIndex = (currentIndex - shift);
        if (newIndex < 0) {
            newIndex = alphabet.length + newIndex;
        }
        result += alphabet[newIndex];            
        }
    }
    return result;
}

const decryptedString = caesarDecipher(encryptedString, shift);
console.log("Decrypted String:",decryptedString);