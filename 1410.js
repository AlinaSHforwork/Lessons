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