let str ="We are leving in real world";
let words =str.split(" ");
let new_str=""
for (let w of words){
    new_str = new_str + w[0].toUpperCase() + w.slice(1)+" ";
  
}
console.log(new_str)