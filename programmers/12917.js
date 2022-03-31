function solution(s) {
    let codeOfArr = [];

    for (let i = 0; i < s.length; i++) {
        codeOfArr.push(s.charCodeAt(i));
    }

    return (codeOfArr.sort((v1, v2) => v2 - v1)).map(v => String.fromCharCode(v)).join('');
}