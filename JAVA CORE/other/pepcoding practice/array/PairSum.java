import java.util.*;
public class PairSum {
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5};
        int target = 5;
        ArrayList<Integer> list = new ArrayList<>();
        for(int i=0;i<arr.length-1;i++)
        {
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[i]+arr[j] == target)
                list.add(arr[i]);
                list.add(arr[j]);
                break;
            }
        }
        System.out.println(list);
    }
}
