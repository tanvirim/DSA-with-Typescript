
//implicit return
const arrowFunc= (n:number):number =>(n==0 || n==1 ? 1 : n*arrowFunc(n-1))

//explicit return
function normalFunc(n:number):number {
    if(n==1 || n==0) return 1

    return n*normalFunc(n-1)
}

console.log(normalFunc(2))