const toFillter = [-1, 3, 0, null, undefined, "5", 7,"katya", -5, 2,"7738ggf", 4, -2, "ijq34", -3, 8,"cat", -7]

function filtrovane(arr = []) {
    if (!Array.isArray(arr)) {
        return "Input is not an array"        
    } 
    else
    console.log("original array:",arr)
    let resultNum = []
    let resultStr = []
    let resultNull = []
    let resultUndefined = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            resultNum.push(arr[i])
        }
        if (typeof arr[i] === "string" && !isNaN(parseFloat(arr[i]))) {
            resultNum.push(parseFloat(arr[i]))
        }
        if (typeof arr[i] === "string" && isNaN(parseFloat(arr[i]))) {
            resultStr.push(arr[i])
        }
        if (arr[i] === null) {
            resultNull.push(arr[i])
        }
        if (arr[i] === undefined) {
            resultUndefined.push(arr[i])
        }
    }
    return ["filtrovane numbers =>",resultNum, "filtrovane string =>" ,resultStr, "filtrovane null =>", resultNull, "filtrovane undefined =>", resultUndefined]
}

const a = filtrovane(toFillter);
console.log("filtrovane array:",a)

console.log("----------------------------------------")

// const par1 = parseInt("100",10)
// const par2 = parseFloat("12.34",10)
// console.log("par1:",par1)
// console.log("par2:",par2)