let str="Frequency of each word of each word";
let words=str.split(" ")
let freq={}
for(let w of words){
    if(freq[w]){
        freq[w]++
    }
    else{
        freq[w]=1
    }
}
console.log(freq)