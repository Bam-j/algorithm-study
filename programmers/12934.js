function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n);

    if (!Number.isInteger(x)) {
        return -1;
    }
    else {
        return Math.pow(x + 1, 2);
    }
}