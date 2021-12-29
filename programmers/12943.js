function solution(num) {
    let answer = 0;

    while(num !== 1) {
        num % 2 === 0 ? num /= 2: num = num * 3 + 1;
        answer++;
    }

    if (answer < 500) {
        return answer;
    }
    else {
        return -1;
    }
}