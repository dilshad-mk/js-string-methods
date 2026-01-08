let str ="Count occurrences of a character";
let result =0;
for(i=0;i<str.length;i++){
    if(str[i]==="a"){
        result=result+i;
    }
}
console.log(`occurrences count of char a:${result}`)