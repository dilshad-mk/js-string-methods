let str = "Frequency of each character";
let freq = {};

for (let ch of str) {
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}

console.log(freq);
