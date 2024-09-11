// function sumOfAll(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total
// }
// console.log(sumOfAll(5))

// best practise:
function sumOfAll(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumOfAll(5));

//n * (n + 1) / 2 --> Big o(1)
//(5n + 2) --> Big o(n)
