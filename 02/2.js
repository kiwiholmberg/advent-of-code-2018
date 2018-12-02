console.time('runtime')

const input = require('./data')

function equalWithPosRemoved(pos, str1, str2) {
  const str1Arr = str1.split('')
  const str2Arr = str2.split('')
  str1Arr.splice(pos, 1) // Stupid js mutating array function
  str2Arr.splice(pos, 1)

  const areEqual = str1Arr.join('') === str2Arr.join('')
  if (areEqual) console.log('Equal letters ', str1Arr.join(''))
  return areEqual
}

function compareStrings (str1, str2) {
  for (var pos = 0; pos < str1.length; pos++) {
    const res = equalWithPosRemoved(pos, str1, str2)
    if (res) return true
  }
}

input.some((baseEntry, baseIndex) => {
  return input.some((candidateEntry, candidateIndex) => {
    if (baseIndex === candidateIndex) return false // Don't compare to self
    return compareStrings(baseEntry, candidateEntry)
  })
})

console.timeEnd('runtime')