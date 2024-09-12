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
//Big - 0(n) space! :

// function logarithmsN(n) {
//   while (n > 1) {
//     console.log(n)
//     n /= 2
//   }
//   console.log("Done")
// }

// logarithmsN(8);

function anotherLogN(n) {
    if (n <= 1) {
        console.log('Done');
        return;
    }
    console.log(n);
    anotherLogN(n / 2);
}

anotherLogN(8);

//Big-O(n) ar thakea Log2(n)/log3(n)/log10(n)... ar complexity kom but Big-O(1) ar thake lengthy...

// Big-O-(1) --> log2(n) --> Big-O-(n)
