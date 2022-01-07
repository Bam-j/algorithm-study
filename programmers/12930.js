function solution(s) {
    let answer = '';
    let str = s.split('').map(v => v);
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            counter = 0;
            answer += ' ';
            continue;
        }

        if(counter % 2 === 0) {
            answer += str[i].toUpperCase();
        }
        else {
            answer += str[i].toLowerCase();
        }

        counter++;
    }

    return answer;
}