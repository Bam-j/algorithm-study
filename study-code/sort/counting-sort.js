export const countingSort = (arr, k) => {
    let counter = Array.from({length: k + 1}, () => 0);
    let result = Array.from({length: arr.length}, () => 0);
    let i;

    for (i = 0; i < arr.length; i++) {
        counter[arr[i]]++;
    }

    for (i = 1; i <= k; i++) {
        counter[i] += counter[i - 1];
    }

    for (i = arr.length - 1; i >= 0; i--) {
        result[--counter[arr[i]]] = arr[i];
    }

    return result;
};