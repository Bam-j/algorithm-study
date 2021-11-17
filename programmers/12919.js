function solution(seoul) {
    let i = 0;

    for (i; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            break
        }
    }
    return "김서방은 " + i + "에 있다";
}