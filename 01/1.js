console.time('runtime')

const input = require('./data')

const res = input.reduce((acc, value) => {
  return acc + value
}, 0)

console.log(res)

console.timeEnd('runtime')