function solution(strings, n) {
    let result = strings;

    for (let i = 0; i < result.length; i++) {
        for (let j = result.length - 1; j > i; j--) {
            if(result[j-1][n] > result[j][n]) {
                let temp = result[j-1];
                result[j-1] = result[j];
                result[j] = temp;
            }
            else if (result[j-1][n] === result[j][n]) {
                if (result[j-1] > result[j]) {
                    let temp = result[j-1];
                    result[j-1] = result[j];
                    result[j] = temp;
                }
            }
        }
    }
    return result;
}