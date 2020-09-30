let arrayToList = arrayValue => {
  let result = null;
  for (let i = arrayValue.length-1; i >= 0; i--) {
    result = {value: arrayValue[i], rest: result}
  }
  return result;
}

let listToArray = list => {
  let result = [];
  for(let node = list; node; node= node.rest) {
    result.push(node.value)
  }
  return result;
}

let prepend = (element, list) => {
  return { value: element, rest: list}
}

let nth = (list, num) => {
  counter = 0;
  for(let node = list; node; node= node.rest) {
    if(counter == num) {
      return node.value
    }
    counter++
  }
  return undefined
}
