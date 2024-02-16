import java.util.*;

public class DuplicateInArray {
    static int findDuplicate(int arr[], int n) {
        int dupValue=-1;
        for (int i = 0; i < n-1; i++) {
            if(arr[i] == arr[i+1])
                dupValue = arr[i];
        }
        return dupValue;
    }

    public static void main(String[] args) {
        int arr[] = { 145, 77, 28, 91, 138, 63, 87, 49, 115, 105, 25, 9, 23, 40, 79, 109, 78, 156, 117, 21, 5, 89,
                44 };
        Arrays.sort(arr);

        
        System.out.println(findDuplicate(arr, arr.length));

    }
}
