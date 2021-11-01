export const quickSort = arr => {
    let left = [];
    let right = [];
    let pivot = [arr[0]];

    if (arr.length < 2) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
        else {
            pivot.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
};
