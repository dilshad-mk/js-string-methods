let str ="Count vowels";
let vowels="aeiou"
let Count=0;
for(let w of str){
   if( vowels.includes(w)){
    Count++;
   }
}
console.log(Count);