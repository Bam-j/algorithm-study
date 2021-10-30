export const shellSort = arr => {
    for (let h = arr.length / 2; h > 0; h /= 2) {
        for (let i = h; i < arr.length; i++) {
            let j;
            let temp = arr[i];

            for (j = i - h; j >= 0 && arr[j] > temp; j -= h) {
                arr[j + h] = arr[j];
            }
            arr[j + h] = temp;
        }
    }

    return arr;
};