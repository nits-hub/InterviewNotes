import java.util.*;


public class FindUniqueInArray {
    static int findUnique(int arr[], int n)
    {
        int unique = -1;
        for(int i = 0; i < n; i++)
        {
            //base case for last element of an array as unique element
            if(i == (n-1) && unique == -1) {
                unique = arr[i];
                break;
            }

            if(arr[i] == arr[i+1] && (i+2) < n )
            {
                i++;
                continue;
            }
            else{
                unique = arr[i];
                break;
            }
        }
        return unique;
    }

    public static void main(String[] args) {
        int arr1[]= {1, 3, 4, 6, 2,2,5, 4, 3, 1, 6};
        Arrays.sort(arr1);
        System.out.println("unque element " + findUnique(arr1,arr1.length));
    }
}
