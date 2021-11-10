export const binarySearch = (arr, key) => {
    let head = 0;
    let tail = arr.length - 1;

    while (head <= tail) {
        let center = parseInt((head + tail) / 2);

        if (key === arr[center]) {
            return console.log("검색 성공");
        }
        else if (key < arr[center]) {
            tail = center - 1;
        }
        else if (key > arr[center]) {
            head = center + 1;
        }
    }

    return console.log("검색 실패");
};