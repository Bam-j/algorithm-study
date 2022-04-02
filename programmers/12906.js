function solution(arr) {
    let result = [arr[0]];
    let prevNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (prevNum === arr[i]) {
            continue;
        }

        result.push(arr[i]);
        prevNum = arr[i];
    }

    return result;
}