import java.util.*;

class Solution {
    public Integer[] solution(int[] arr, int divisor) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        int idx = 0;

        for(int value: arr) {
            if(value%divisor == 0) {
                list.add(idx, value);
                idx++;
            }
        }

        if(idx == 0) {
            list.add(-1);
        }

        Integer[] answer = list.toArray(new Integer[list.size()]);

        Arrays.sort(answer);

        return answer;
    }
}