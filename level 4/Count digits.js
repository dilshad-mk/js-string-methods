let strwith_digits="Count digits 2434 Count digits344";
let count_didgits=strwith_digits.match(/\d/g).length;
console.log(`digit count ${count_didgits}`)