function solution(s, n) {
    let answer = '';
    let sArr = s.split('').map(v => {
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
        v = String.fromCharCode(substitutionValue);

        return v;
    });

    return sArr.join('');
}