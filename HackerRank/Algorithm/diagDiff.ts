function diagonalDifference(arr:number[][]):number {
    let mainDia = 0;
    let secDia = 0 ;
    for(let i= 0 ;i<arr.length ; i++){
         mainDia += arr[i][i]
         secDia +=arr[i][arr.length -1-i]  
    }
    
    return Math.abs(mainDia- secDia)

}