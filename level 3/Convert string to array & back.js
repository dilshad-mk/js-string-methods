let str ="Convert string to array & back";
let arr=str.split(" ");
console.log(`string converted to array:: ${arr} ::: ${typeof arr}`);
let str2 =arr.join(" ");
console.log(typeof str2 ,"::::",str2)