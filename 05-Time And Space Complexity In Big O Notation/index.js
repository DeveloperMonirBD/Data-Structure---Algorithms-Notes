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

function uniqueName(arr) {
    let uniqueName = [];
    for (let i = 0; i < arr.length; i++) {
        //n2
        let element = arr[i];
        if (!uniqueName.includes(element)) {
            uniqueName.push(element);
        }
    }
    return uniqueName; //n
}

//time Complexity => n2
//space Complexity => n

let nameArray = ['monir', 'Ashik', 'rafi', 'monir', 'rafi', 'riaz'];
console.log(uniqueName(nameArray));
