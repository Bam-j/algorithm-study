function solution(x) {
    let xStr = x + '';
    let digitSum = 0;

    for (let i = 0; i < xStr.length; i++) {
        digitSum += parseInt(xStr [i]);
    }

    return x % digitSum === 0;
}