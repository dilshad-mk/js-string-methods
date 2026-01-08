let str ="Count occurrences of a word Count of a of a";
let words = str.trim().split(" ")
let result =0;
for(i=0;i<words.length;i++){
    if(words[i]==="of"){
        result=result+i;
    }
}
console.log(result);