/*
    알고리즘 풀이 테스트 코트용 파일입니다.
 */

function solution(a, b) {
    if (a === b) return a;

    let result = 0;

    if(a > b) {
        for (let i = a; b; i++) {
            result += i;
        }
    }
    else {
        for (let i = b; a; i++) {
            result += i;
        }
    }

    return console.log(result);
}

console.log(solution(3, 6));