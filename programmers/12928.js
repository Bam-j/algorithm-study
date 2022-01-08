function solution(n) {
    let answer = 0;

    for (let num = n; num >= 1; num --) {
        if (n % num === 0) {
            answer += num;
        }
    }

    return answer;
}