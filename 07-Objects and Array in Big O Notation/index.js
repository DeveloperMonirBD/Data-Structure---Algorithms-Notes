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

//Big-O(n) ar thakea Log2(n)/log3(n)/log10(n)... ar complexity kom but Big-O(1) ar thake lengthy...

// Big-O-(1) --> log2(n) --> Big-O-(n)

//Object Big-O-(n) complexity:
const myObject = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    car: [4, 6, 7, 9]
};

//ati Big-O(N) --> karon, ame saile joto gula issa totogula enrty add korte pare.

// console.log(Object.keys(myObject));
// console.log(Object.values(myObject));
// console.log(Object.entries(myObject));


//Object Big-O-(1) complexity: karon ame sudhu matro 1ta value passe.. hoi true na hoi false.
console.log(myObject.hasOwnProperty('video'))
console.log(myObject.hasOwnProperty('eyeColor'))


// array ar prothomea kono kisu add/ remove korle Complexity barea jai but ses a add/ remove korle Complexity barea na.

const fruits = [ 'jackfruts', 'Banana', 'Orange', 'Apple', 'Mango'];
 push()              1          2          3         4        5
 unshift()           0          0          1         2        3
 unshift()           1          2          3         4        5
 
//mango k jokhon push('Mango') kora holo tokhon sudhumatro array ar index 1 bare gelo But jokhon unshift() kora holo tokhon array ar prottecta index k change korlo jar karone array ar last a add korle tar complexity kom hoi .. r prothome korle complexity bashe hoi

// push()/ pop() --> complexity --> Big-O-(1)
// shift()/ unshift() --> complexity --> Big-O-(n)

// Big O of Object:
// Object.keys() = O(N)
// Object.values() = O(N)
// Object.entries() = O(N)
// Object.hasOwnProperty() = O(1)

// Big O of Array:
// insertion = depends
// Removal = depends
// Searching = O(N)
// Access = O(1)

// Big O of Array Operation:
// push = O(1)
// pop = O(1)
// shift = O(N)
// unshift = O(N)
// forEach/ map/ filter/ reduce/ etc = O(N)





