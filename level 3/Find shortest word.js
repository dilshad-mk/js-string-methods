let str="Find shortest word";
let arr =str.trim().split(" ");
// let shortest=[""];
let shortest = arr[0];
for (let w of arr) {
  if (w.length < shortest.length) {
    shortest = w;
  }
}

console.log(shortest)
