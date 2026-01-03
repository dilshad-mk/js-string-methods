let str="welcome";
let arr=[]
for (i=0;i<=str.length;i++){
   if(i!=0){
    arr.push(str[str.length-i])
   }

}
console.log(arr.join(""))