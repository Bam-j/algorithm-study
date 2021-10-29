function solution(a, b) {
    let answer = '';
    let sumOfDays = 0;
    const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

    for (let i = 0; i < a - 1; i++) {
        sumOfDays += daysOfMonth[i];
    }

    sumOfDays += b;
    answer = date[sumOfDays % 7];

    return answer;
}