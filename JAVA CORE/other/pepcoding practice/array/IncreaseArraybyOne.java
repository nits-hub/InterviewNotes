import java.util.*;
public class IncreaseArraybyOne {
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        //T1: 9 9 9 9  //T2: 1 2 3 4  //T3: 1 6 7 9
        arr.add(0);
        arr.add(0);
        arr.add(0);
        arr.add(0);

        int start=0;
        while(arr.get(start) == 0 ){
            arr.remove(start);
            if(arr.isEmpty()){
                arr.add(1);
                System.out.println(arr);
                return;
            }
        }

        int end = arr.size()-1;
        int carry=0;

        while(end >= 0 && arr.get(end) == 9)
        {
            if(arr.get(end) == 9){
                arr.set(end,0);
                carry = 1;
            }
            end--;
        }

        if(end < 0 && carry == 1)
            arr.add(0,1);
        else if(end >= 0 && carry == 1)
            arr.set(end,arr.get(end)+1);
        else
            arr.set(end,arr.get(end)+1);

        System.out.println(arr);
    }
}
