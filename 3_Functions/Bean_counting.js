/*
let countBs = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      counter++;
    }
  }
  return counter;
}
*/

let countChar = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++
    }
  }
  return counter;
}

let countBs = (str) => {
  return countChar(str, "B");
}
