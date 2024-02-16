import java.util.ArrayList;
public class RemoveDuplicates {
    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>();
        int arr[] = {0,0,1,1,1,2,2,3,3,4};

        int var = arr[0];
        
        for(int i=1;i<arr.length;i++)
        {
            if(var == arr[i])
                continue;
            else{
                list.add(var);
                var=arr[i];
            }
        }
        list.add(arr[arr.length-1]);

        System.out.println(list);
    }
}
