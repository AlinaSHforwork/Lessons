console.log("Lesson about recursion")

let sum = [0, 1];


function fibonacci(guantity) {
    for (let i = 0; i < guantity; i++) {        
        let next = sum[sum.length - 1] + sum[sum.length - 2];
        sum.push(next);  
        if (sum.length > guantity) {
            sum.pop();
        }
    }
    console.log("fibonacci:", sum);
}



fibonacci("3", 3); 
fibonacci("5", 5); 
fibonacci("7", 7); 

console.log("----------------------------------------")

function fibonacciRecursion(guantity, m = 2, n =3 ) {
    let sumrec = [];
    //console.log(`guantity: ${guantity}, m: ${m}, n: ${n}`);
    sumrec.push(m);
    console.log("fibonacciRecursion:", sumrec);
    if (guantity < 0) {
        return [];
    }

    fibonacciRecursion(guantity - 1, n, m + n);
    sumrec.push(m);
    return sumrec;
}

const a = fibonacciRecursion(3);
console.log("fibonacciRecursion 3:", a);
const b = fibonacciRecursion(5);
console.log("fibonacciRecursion 5:", b);
const c = fibonacciRecursion(7);
console.log("fibonacciRecursion 7:", c);


console.log("----------------------------------------")