import java.util.ArrayList;

public class Intersection2 {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList();
        int arr1[] = {1,2,3,2,3,4};
        int arr2[] = {2,2,3,5};

        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if(arr1[i] == arr2[j])
                {
                    list.add(arr1[i]);
                    arr2[j] = Integer.MIN_VALUE;
                    break;
                }
            }
        }
        if(list.size() == 0)
            list.add(-1);
        
        System.out.println(list);
    }
}
