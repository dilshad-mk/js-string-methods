let str="Count$ sp@ecial ch#ara!cters";
let special_char="!@#$%^&*";
let Count=0;
for(let w of special_char){
    if(str.includes(w)){
        Count++

    }
}
console.log(Count)