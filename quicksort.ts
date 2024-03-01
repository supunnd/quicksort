// Helper function to swap two elements in an array
function swap(items: number[], leftIndex: number, rightIndex: number) {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

// Helper function to find the partition position
function partition(array: number[], left: number = 0, right: number = array.length - 1): number {
    const pivot = array[Math.floor((right + left) / 2)]; // middle element
    let i = left; // left pointer
    let j = right; // right pointer
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j); // swap two elements
            i++;
            j--;
        }
    }
    return i;
}

// Main QuickSort function
function quickSort(array: number[], left: number = 0, right: number = array.length - 1): number[] {
    if (array.length > 1) {
        const index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}

// Test the quickSort function
let testArray = [5, 3, 7, 6, 2, 9];
let sortedArray = quickSort(testArray);
console.log(testArray);
console.log(sortedArray);