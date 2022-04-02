function solution(s) {
    let result = '';

    (s.length % 2 === 0) ? result = s.substr(s.length/2 - 1, 2): result = s.substr(s.length/2, 1);

    return result;
}