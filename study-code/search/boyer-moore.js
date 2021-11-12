export const boyerMoore = (str, key) => {
    let strPointer;
    let keyPointer;
    let strLength = str.length;
    let keyLength = key.length;
    let skipTable = new Map();

    for (let i of str) {
        skipTable.set(i, keyLength);
    }

    for (strPointer = 0; strPointer < keyLength; strPointer++) {
        if (skipTable.has(key[strPointer])) {
            skipTable.set(key[strPointer], keyLength - strPointer - 1);
        }
    }

    while (strPointer < strLength) {
        keyPointer = keyLength - 1;

        while (str[strPointer] === key[keyPointer]) {
            if (keyPointer === 0) {
                return console.log("검색 성공, 인덱스: " + strPointer);
            }
            strPointer--;
            keyPointer--;
        }
        strPointer += Math.max(skipTable.get(str[strPointer]), keyLength - keyPointer);
    }
    return console.log("검색 실패");
};