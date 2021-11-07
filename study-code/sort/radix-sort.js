export const radixSort = (arr, maxDigit) => {
    let digit = 10;
    let counter = [[]];

    for (let i = 0; i < maxDigit; i++) {
        let position = 0;
        digit *= 10;

        for (let j = 0; j < arr.length; j++) {
            let bucket = parseInt(arr[j] % digit);

            if (counter[bucket] == null) {
                counter[bucket] = [];
            }

            counter[bucket].push(arr[j]);
        }

        for (let j = 0; j < counter.length; j++) {
            let value = null;

            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[position++] = value;
                }
            }
        }
    }
    return arr;
};