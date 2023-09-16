//calculate nth fibonacci number

//iterative approach
function fib(n:number):number {
    if(n<=0) return n
    let prev = 0
    let current = 1
    //i <= n NOT i<n because nth number is index of an array.. 0,1,2,3..
    // therefore if i want 3rd number. i need to iterate to 4th
    for(let i = 2 ; i<=n ; i++){
        let next = prev+current
        prev =current
        current = next
    }
    return current
}

console.log(fib(5))