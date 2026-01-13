let str="Least frequent character"
let obj={};
 

for(let w of str){
    if(obj[w]){
        obj[w]++
    }
    else{
        obj[w]=1
    }
}

let minfreq=Infinity;
let leastchar="";
for(let key in obj){
   if(obj[key]<minfreq){
    minfreq=obj[key]
    leastchar=key;
   }
}
console.log(obj);
console.log(leastchar)