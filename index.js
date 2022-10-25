var letterCombinations = function (digits) {
  const map = {
    1: [],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result = [];

  const walk = (i, prefix) => {
    if (i > digits.length - 1) {
      let ans = result.push(prefix);
      return;
    }
    const digit = digits[i];
    for (let char of map[digit]) {
      walk(i + 1, prefix + char);
    }
  };
  if (digits.length > 0) {
    walk(0, "");
  }
  return result;
};
let str = "23";
document.write(letterCombinations(str));
