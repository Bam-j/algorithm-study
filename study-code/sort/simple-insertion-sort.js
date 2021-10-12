export let simpleInsertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j;
        let temp = arr[i];

        for (j = i; (j > 0 && arr[j - 1] > temp); j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = temp;
    }

    return arr;
};
