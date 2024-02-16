import java.util.Scanner;

public class SumofArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // size of array 1 and array 2
        int nSize = sc.nextInt();
        int mSize = sc.nextInt();

        System.out.println("Enter size of first array: ");
        int arr1[] = new int[nSize];
        System.out.println("enter elements value in arr1: ");
        for (int i = 0; i < arr1.length; i++) {
            arr1[i] = sc.nextInt();
        }

        System.out.println("Enter size of second array: ");
        int arr2[] = new int[mSize];
        System.out.println("enter elements value in arr2: ");
        for (int i = 0; i < arr2.length; i++) {
            arr2[i] = sc.nextInt();
        }

        // checking if the size of array-1 is greater or size of the array-2 is greater and also summation of value
        if(nSize > mSize){
            for (int i = 1; i < arr1.length; i++) {
                arr1[i] = arr1[i] + arr2[i];
            }

            for (int i = 0; i < arr1.length; i++) {
                System.out.println(arr1[i]);   
            }
        }
        else{
            for (int i = 1; i < arr2.length; i++) {
                arr2[i] = arr2[i] + arr1[i];
            }

            for (int i = 0; i < arr2.length; i++) {
                System.out.println(arr2[i]);   
            }
        }
        sc.close();
    }
}
