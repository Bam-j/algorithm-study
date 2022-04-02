function solution(arr, divisor) {
    let answer = [];
    let cnt = 0;

    for (let value of arr) {
        if (value % divisor === 0) {
            answer.push(value);
            cnt++;
        }
    }

    cnt ? answer.sort((a, b) => a - b) : answer[0] = -1;

    return answer;
}