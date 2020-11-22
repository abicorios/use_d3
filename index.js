const d3 = require('d3')
const csv = `a,b
1,2
3,4`
const t = d3.csvParse(csv)
console.log(t)
