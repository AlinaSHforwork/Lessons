console.log("Lesson about functions")

function square(x) {
return x * x
}

function cub(x) { 
    return x * x * x
}

function doMath(functionToExecute, param) { 
    return functionToExecute(param)
}

const a = square(3)
const b = doMath(square, 3)
const c = doMath(cub, 3)

console.log("Number in square:", a) 
console.log("Number in square:",b) 
console.log("Number in cub:",c)

console.log("Katya is Cocacolic (>'^'<)")