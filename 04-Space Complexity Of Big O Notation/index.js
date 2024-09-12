//Big O Notation:
// constant Don't matter:

// 0(2n)       0(n)
// 0(100)      0(1)
// 0(19n2)     0(n2) /(n squire)

// Smaller terms Don't matter:

// 0(n + 10)          0(n)
// 0(100n + 50)       0(n)
// 0(n2 + 5n + 8)     0(n2) /(n squire)

//Space Complexity:
//Big - 0(1) space! :
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([23, 4, 6]));



//Big - 0(n) space! :
// function double(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
//     return newArr;
// }

// console.log(double([3, 4, 5]));

