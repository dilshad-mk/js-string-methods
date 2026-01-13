let str ="Reverse words in sentence";
let arr = str.split(" ")
let result =[]
for (let w of arr ){
    result.push(w.split("").reverse().join(""));
}
console.log(result.join(" "));
