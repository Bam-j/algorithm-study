export const sentinelMethodLinearSearch = (arr, sentinel, key) => {
    let i = 0;

    arr[sentinel] = key;

    while (true) {
        if (key === arr[i]) {
            break;
        }
        i++;
    }

    console.log((i === sentinel) ? '보초법: 검색 실패' : '보초법: 검색 성공');
}