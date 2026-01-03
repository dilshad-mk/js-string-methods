let str ="no longer need length to get length";
let count =0;
let str_length=str.split(" ").join("");
for (i=0;i<str_length.length;i++){
    count++;
}
console.log(`length of str: ${count}`);