const isPalindrome = (string) => string == string.split('').reverse().join('');

const isAnagram = (w1, w2) => {
  const regularize = (word) => {
    return word.toLowerCase().split('').sort().join('').trim();
  };

  return regularize(w1) === regularize(w2);
};

module.exports = { isPalindrome, isAnagram };
