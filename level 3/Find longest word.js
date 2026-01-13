let str ="Find longest word";
let arr = str.split(" ")
let longest="";
for (let w of arr){
    if (longest.length<=w.length){
        longest=w;
    }
}
console.log(longest)