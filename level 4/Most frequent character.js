let str ="Most frequent character";
let freq={};
let maxCount = 0;
let mostChar = "";
for(let w of str){
    if(freq[w]){
        freq[w]++;
    }
    else{
        freq[w]=1;
    }
}
for (let key in freq) {
  if (freq[key] > maxCount && key !== " ") {
    maxCount = freq[key];
    mostChar = key;
  }
}

console.log(mostChar)
