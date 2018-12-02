console.time('runtime')

const input = require('./data')

function charcodeTimesInString (charcode, str) {
  const charList = str.split('')
  const char = String.fromCharCode(charcode)
  return charList.reduce((acc, val) => { 
    if (val === char) {
      return acc + 1
    }
    return acc
  }, 0)
}

function hasNEntriesOfAnyChar(n, str) {
  for (var charCode = 97; charCode <= 122; charCode++) {
    if (charcodeTimesInString(charCode, str) === n) {
      // Charcode existed n times in the string
      return true
    }
  }
  return false
}

const entriesWithTwoOccurences = input.filter(entry => hasNEntriesOfAnyChar(2, entry))
const entriesWithThreeOccurences = input.filter(entry => hasNEntriesOfAnyChar(3, entry))

console.log('Total entries in input', input.length)
console.log('Number of entries with 2 chars', entriesWithTwoOccurences.length)
console.log('Number of entries with 3 chars', entriesWithThreeOccurences.length)

console.log('Checksum: ', entriesWithTwoOccurences.length * entriesWithThreeOccurences.length)

console.timeEnd('runtime')