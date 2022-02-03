function solution(n) {
    //소수 찾기, 에라스토테네스의 체 이용
    let arr = [];
    let cnt = 0;

    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }

    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) {
            continue;
        }

        for (let j = 2 * i; j <= n; j += i) {
            arr[j] = 0;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (arr[i] !== 0) {
            cnt++;
        }
    }

    return cnt;
}