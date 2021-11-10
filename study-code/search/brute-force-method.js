export const bruteForceMethod = (str, key) => {
    let strIndex = 0;

    while (str[strIndex]) {
        let keyIndex = 0;

        if (str[strIndex] === key[keyIndex]) {
            let currentIndex = strIndex;

            while (str[strIndex] === key[keyIndex]) {
                if (keyIndex === key.length - 1) {
                    return console.log("검색 성공, 인덱스: " + currentIndex);
                }
                strIndex++;
                keyIndex++;
            }
        }
        strIndex++;
    }

    return console.log("검색 실패");
};