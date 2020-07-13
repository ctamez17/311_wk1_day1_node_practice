const { strings } = require("..")

const split = (str, delim) => {
  // write code for strings.split
  delim = str.split('-')
  return delim;
}

const pairs = (str) => {
  // write code for strings.pairs
  let subStr = "";
  let arrOfPairs = [];
  for (let i = 0; i < str.length; i+=2){
    subStr = str[i] + str[i+1];
    arrOfPairs.push(subStr);
  }
  return arrOfPairs;
}

const reverse = (str) => {
  // write code for strings.reverse
  let newStr = "";
  let c = "";
  let strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    c = str[str.length-1];
    str = str.slice(0, str.length-1);
    newStr += c;
  }
  return newStr;
}

module.exports = {
  split,
  pairs,
  reverse
}
