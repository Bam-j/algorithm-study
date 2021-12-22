function solution(x, n) {
    let answer = [];
    let incre = x;
    let cnt = 0;

    for (x; cnt < n; x += incre ) {
        answer.push(x);
        cnt++;
    }

    return answer;
}