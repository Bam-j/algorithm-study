export const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            console.log("검색 성공");

            return 0;
        }
    }

    console.log("검색 실패");
}