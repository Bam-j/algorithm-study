let count = 0;

export const eightQueen = i => {
    let flag_row = Array.from({length: 8}, () => false);
    let flag_diagonalRL = Array.from({length: 15}, () => false); // '/'방향 대각선
    let flag_diagonalLR = Array.from({length: 15}, () => false); // '\'방향 대각선
    let positionOfQueen = Array.from({length: 8}, () => 0);

    for (let j = 0; j < 8; j++) {
        if (!flag_row[j] && !flag_diagonalRL[i + j] && !flag_diagonalLR[i - j + 7]) {
            positionOfQueen[i] = j;

            if (i === 7) {
                display(positionOfQueen, count += 1);
            }
            else {
                flag_row[j] = true;
                flag_diagonalRL[i + j] = true;
                flag_diagonalLR[i - j + 7] = true;

                eightQueen(i += 1);

                flag_row[j] = false;
                flag_diagonalRL[i + j] = false;
                flag_diagonalLR[i - j + 7] = false;
            }
        }
    }
};

const display = (pos, count) => {
    console.log("#" + count + " 해답");

    for (let i = 0; i < 8; i++) {
        console.log(pos[i]);
    }
    console.log("---------------\n");
};