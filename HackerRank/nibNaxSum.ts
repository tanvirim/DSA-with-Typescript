function miniMaxSum(arr:number[]) {
    const sorted = arr.sort((a, b) => a - b);
    let summax = 0;

    for (let i = 0; i < sorted.length - 1; i++) {
        summax += sorted[i];
    }

    let summin = 0;

    for (let i = 1; i < sorted.length; i++) {
        summin += sorted[i];
    }

    console.log(summin, summax);
}

// Example usage:
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);


//efficient solution
//determine min and max in a single pass
function miniMaxSum1(arr:number[]) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        sum += num;

        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }
    }

    const minSum = sum - max;
    const maxSum = sum - min;

    console.log(minSum, maxSum);
}

