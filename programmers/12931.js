function solution(n) {
    let answer = 0;

    n.toString().split('').map(v => {
        answer += parseInt(v);
    });

    return answer;
}