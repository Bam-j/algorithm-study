/*
    알고리즘 풀이 테스트 코트용 파일입니다.
 */

function solution(s){
    let numsOfP = 0;
    let numsOfY = 0;

    s.split('').map(v => {
        if (v === 'P' || v === 'p') {
            numsOfP++;
        }
        else if (v === 'Y' || v === 'y') {
            numsOfY++;
        }
    });

    return numsOfP === numsOfY;
}

console.log(solution('pPoooyY'));