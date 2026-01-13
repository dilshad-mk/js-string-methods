let str="Remove duplicate characters";
let result=[];
for(let w of str ){
    if(!result.includes(w)){
        result.push(w);
    }
}
console.log(result.join(","))