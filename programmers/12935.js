function solution(arr) {
    let answer = [];

    if (arr.length <= 1) {
        answer[0] = -1;

        return answer;
    }

    let min = Math.min(...arr);

    answer = arr.filter(value => value > min);

    return answer;
}