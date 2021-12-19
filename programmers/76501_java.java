class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        int i = 0;
        int sum = 0;

        for(boolean flag: signs) {
            if(!flag) {
                sum += absolutes[i] * -1;
            }
            else {
                sum += absolutes[i];
            }
            i++;
        }
        return sum;
    }
}