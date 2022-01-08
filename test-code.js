/*
    알고리즘 풀이 테스트 코트용 파일입니다.
 */
function solution(s, n) {
    let answer = '';
    let sArr = s.split('').map(v => v)

    sArr = sArr.map(v => {
        let substitutionValue = v.charCodeAt(0);

        //대문자인 경우
        if (substitutionValue >= 65 && substitutionValue <= 90) {
            substitutionValue += n;

            if (substitutionValue > 90) {
                substitutionValue -= 26;

                v = String.fromCharCode(substitutionValue);
            }
        }
        else if (substitutionValue >= 97 && substitutionValue <= 122) {
            substitutionValue += n;

            if (substitutionValue > 122) {
                substitutionValue -= 26;

                v = String.fromCharCode(substitutionValue);
            }
        }
        else {
            v = String.fromCharCode(substitutionValue);
        }

        return v;
    });

    return sArr;
}


//console.log();
console.log(solution('AB', 2));