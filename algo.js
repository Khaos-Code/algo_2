function insertionSort(arr) {
    // Start from the second element (index 1) as the first element is trivially sorted
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be compared
        let key = arr[i];
        let j = i - 1;

        // Compare key with each element on the left of it
        // until an element smaller than it is found
        while (j >= 0 && arr[j] > key) {
            // Shift the larger element one position to the right
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }
    return arr; // Return the sorted array
}

// Example Usage:
let array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);

let sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
