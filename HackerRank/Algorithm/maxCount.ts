function birthdayCakeCandles(candles) {
    // Initialize variables to keep track of the maximum height and the count of tallest candles.
    let maxHeight = 0; // This will store the maximum height found so far.
    let count = 0;    // This will store the count of tallest candles.

    // Loop through each candle height in the 'candles' array.
    for (const height of candles) {
        // Check if the current 'height' is greater than the current 'maxHeight'.
        if (height > maxHeight) {
            // If yes, update 'maxHeight' to the new maximum height.
            maxHeight = height;
            
            // Since we found a new maximum height, reset the 'count' to 1.
            // This represents that we have one candle with the new maximum height.
            count = 1;
        } else if (height === maxHeight) {
            // If the current 'height' is equal to the 'maxHeight', it means we found another candle with the same maximum height.
            // Increment the 'count' by 1 to keep track of how many candles have this maximum height.
            count++;
        }
    }

    // After looping through all the candles, 'maxHeight' will store the overall maximum height,
    // and 'count' will store the count of candles with that maximum height.
    
    // Finally, return the 'count', which represents the number of tallest candles.
    return count;
}

function birthdayCakeCandles2(candles) {
    let maxHeight = 0;
    let count = 0;
    
    for (const height of candles) {
        if (height > maxHeight) {
            maxHeight = height;
            count = 1;
        } else if (height === maxHeight) {
            count++;
        }
    }
    
    return count;
}