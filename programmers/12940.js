function solution(n, m) {
    let answer = [];

    answer.push(GCF(n, m));
    answer.push(LCM(n, m));

    return answer;
}

const GCF = (n, m) => {
    if (m === 0) {
        return n;
    }
    else {
        return GCF(m, n % m);
    }
};

const LCM = (n, m) => {
    return n * m / GCF(n, m);
};