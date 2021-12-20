import java.util.*;

public class Solution {
    public ArrayList<Integer> solution(int []arr) {
        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(arr[0]);

        for(int i = 1; i < arr.length; i++){
            if(arr[i] != arr[i-1]){
                list.add(arr[i]);
            }
        }

        return list;
    }
}