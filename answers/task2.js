
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanedStr);
    const reversedStr = cleanedStr.split('').reverse().join('');
    console.log(reversedStr);
    return cleanedStr === reversedStr;
}

const Words = "A man, a plan, a canal: Panama";
console.log(isPalindrome(Words));

const anotherWord = "Hello, World!";
console.log(isPalindrome(anotherWord));