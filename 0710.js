const toFillter = [-1, 3, 0, null, undefined, "5", 7, -5, 2,"7738ggf", 4, -2, "huefhe837877", -3, 8, -7]

function filtrovane(arr = []) {
    if (!Array.isArray(arr)) {
        return "Input is not an array"        
    } 
    else
    console.log("original array:",arr)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i])
        }
        if (typeof arr[i] === "string" && !isNaN(parseFloat(arr[i]))) {
            result.push(parseFloat(arr[i]))
        }
    }
    return result
}

const a = filtrovane(toFillter);
console.log("filtrovane array:",a)

console.log("----------------------------------------")

const par1 = parseInt("100",10)
const par2 = parseFloat("12.34",10)
console.log("par1:",par1)
console.log("par2:",par2)