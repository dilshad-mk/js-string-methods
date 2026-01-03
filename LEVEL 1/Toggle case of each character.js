let str="JavaScript Is Easy To Learn";
let togled_str="";
for (let w of str){
    if  (w===w.toUpperCase()){
    togled_str=togled_str+w.toLowerCase();
    }
    else if(w===w.toLowerCase()){
        togled_str=togled_str+w.toUpperCase();
    }
}
  console.log(togled_str)


