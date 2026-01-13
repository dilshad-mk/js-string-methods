let str="Count consonants";
let Count=0;
let vowels="aeiou"
let consonants=[]
for(let w of str){
    if(!vowels.includes(w)){
        Count++;
        consonants.push(w)
    }
}
console.log(`consonants count:${Count}, consonants are ${consonants} `);
