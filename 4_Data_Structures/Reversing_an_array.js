let reverseArray = arrayValue => {
  let result = [];
  for (let i = arrayValue.length-1; i >= 0; i--) {
    result.push(arrayValue[i])
  }
  return result;
}

let reverseArrayInPlace = arrayValue => {
  let toSwap = [];
  for (let i = 0; i < Math.floor(arrayValue.length/2); i++) {
    toSwap = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length-1-i];
    arrayValue[arrayValue.length-1-i] = toSwap;
  }
  return arrayValue;
}
