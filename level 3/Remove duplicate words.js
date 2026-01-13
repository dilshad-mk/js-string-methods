let str ="Remove duplicate words duplicate words";
let arr=str.split(" ")
let result =[];
for (let w of arr){
    if(!result.includes(w)){
        result.push(w);
    }
}
console.log(result.join(" "))