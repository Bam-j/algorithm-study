class Solution {
    public String solution(int a, int b) {
        String answer = "";
        String[] day = {"THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"};
        int[] daysOfMonth = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int sumOfDate = 0;

        for(int i = 0; i < a - 1; i++) {
            sumOfDate += daysOfMonth[i];
        }

        sumOfDate += b;

        answer = day[sumOfDate%7];

        return answer;
    }
}