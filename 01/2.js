console.time('runtime')

const input = require('./data')

let startOn = 0
const seenFrequencies = []
let foundTwice

function findSecondFreqOccurance (startValue) {
  const res = input.reduce((acc, value) => {
    const newValue = acc + value
    if (typeof foundTwice === 'undefined' && seenFrequencies.includes(newValue)) {
      foundTwice = newValue
    } else {
      seenFrequencies.push(newValue)
    }

    return newValue
  }, startValue)
  return res
}

while (typeof foundTwice === 'undefined') {
  startOn = findSecondFreqOccurance(startOn)
}

console.log('Found twice:', foundTwice)
console.timeEnd('runtime')