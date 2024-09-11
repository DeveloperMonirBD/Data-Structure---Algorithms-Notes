//Big O Notation:
// constant Don't matter:

// 0(2n)       0(n)
// 0(100)      0(1)
// 0(19n2)     0(n2) /(n squire)

// Smaller terms Don't matter:

// 0(n + 10)          0(n)
// 0(100n + 50)       0(n)
// 0(n2 + 5n + 8)     0(n2) /(n squire)



//Big - 0(n) Complexity:
function min5log(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

min5log(100); //Big - 0(n)



//Big - 0(1) Complexity:
// function max5log(n) {
//     for (let i = 0; i <= Math.min(5, n); i++) {
//         console.log(i)
//     }
// }

// max5log(9) //Big - 0(1)
