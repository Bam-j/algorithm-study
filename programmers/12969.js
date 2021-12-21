process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(' ');
    const n = Number(input[0])
    const m = Number(input[1]);
    let str = '';

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            str += '*';
        }
        str += '\n';
    }

    return console.log(str);
});