function multipleArray(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log(i, j)
        }
    }
}

multipleArray(2)

//n + n = n2
//n + 3 = n + 3



//n * (n + 1) / 2 --> Big o(1)
//(5n + 2) --> Big o(n)
