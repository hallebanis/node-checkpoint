
let sum=process.argv.slice(2).reduce((accumulator, currentValue) => accumulator + parseInt(currentValue),0)
console.log(sum)
