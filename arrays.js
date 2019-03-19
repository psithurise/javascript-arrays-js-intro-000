function addElementToBeginningOfArray(arr, arg) {
  return [arg, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, arg) {
  return arr.unshift(arg)
}

function addElementToEndOfArray(arr, arg) {
  return [...arr, arg]
}

function destructivelyAddElementToEndOfArray(arr, arg) {
  return arr.push(arg)
}

function accessElementInArray(arr, i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1)
}
