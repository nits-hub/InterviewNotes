public class MergeTwoSortedArray{

    static void printSortedArray(int arr3[])
    {
        for (int i : arr3) {
            System.out.print(i+" ");
        }
    }

    static void mergeArray(int arr1[], int n, int arr2[], int m, int arr3[])
    {
        int s1=0,e1=arr1.length-1;
        int s2=0,e2=arr2.length-1;
        int s3=0;

        while(s1<=e1 && s2<=e2)
        {
            if(arr1[s1] <= arr2[s2]){
                arr3[s3] = arr1[s1];
                s3++;s1++;
            }
            else{
                arr3[s3] = arr2[s2];
                s3++;s2++;
            }
        }
        while(s1<=e1)
        {
            arr3[s3] = arr1[s1];
            s1++;s3++;
        }

        while(s2<=e2)
        {
            arr3[s3] = arr2[s2];
            s2++;s3++;
        }

        printSortedArray(arr3);
    }

    public static void main(String[] args) {
        int arr1[] = {1,3,5,7};
        int arr2[] = {0,2,6,8,9};
        int n = arr1.length;
        int m = arr2.length;
        int arr3[] = new int[n+m];

        mergeArray(arr1,n,arr2,m,arr3);
    }
}