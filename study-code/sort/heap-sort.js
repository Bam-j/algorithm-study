export const heapSort = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr = heapify(arr, i);

        if (arr[0] > arr[i]) {
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
        }
    }
    return arr;
};

const heapify = (arr, idx) => {
    let index = parseInt(idx / 2) - 1;
    let temp;

    while (index >= 0) {
        const left = arr[index * 2 + 1];
        const right = arr[index * 2 + 2];

        if (left >= right && arr[index] < left) {
            temp = arr[index];
            arr[index * 2 + 1] = temp;
            arr[index] = left;
        }
        else if (left < right && arr[index] < right) {
            temp = arr[index];
            arr[index * 2 + 2] = temp;
            arr[index] = right;
        }
        index--;
    }
    return arr;
};