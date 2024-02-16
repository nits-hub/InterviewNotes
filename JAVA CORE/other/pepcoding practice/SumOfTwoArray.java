import java.util.Scanner;

public class SumOfTwoArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //input of array-1 size
        System.out.print("Enter size of array1: ");
        int n = sc.nextInt();
        int arr1[] = new int[n];

        //input of array-1 elements
        System.out.println("Enter the elements of array1: ");
        for (int i = 0; i < n; i++) {
            arr1[i] = sc.nextInt();
        }
        
        //input of array-2 size
        System.out.print("Enter size of array2: ");
        int m = sc.nextInt();
        int arr2[] = new int[m];

        //input of array-2 elements
        System.out.println("Enter the elements of array1: ");
        for (int i = 0; i < m; i++) {
            arr2[i] = sc.nextInt();
        }

        //conditions check
        if (n == m) {
            int arr3[] = new int[n];
            for (int i = 0; i < n; i++)
                arr3[i] = arr1[i] + arr2[i];
            for (int i : arr3) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
        else if(n > m){
            int arr3[] = new int[n];
            arr3 = arr1;

            for (int i = m-1; i >= 0; i--) {
                arr3[i+1] = arr3[i+1] + arr2[i];
            }
            for (int i : arr3) {
                System.out.print(i+" ");
            }
        }
        else{
            int arr3[] = new int[m];   
            arr3 = arr2;
            for(int i=n-1; i>=0; i--)
            {
                arr3[i+1] = arr3[i+1] + arr1[i];
            }
            for (int i : arr3) {
                System.out.print(i+" ");
            }
        }
    }
}
