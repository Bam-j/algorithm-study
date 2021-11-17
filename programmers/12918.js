function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (isNaN(s - 0)) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
//"14e5"같은 지수 때문에 실패