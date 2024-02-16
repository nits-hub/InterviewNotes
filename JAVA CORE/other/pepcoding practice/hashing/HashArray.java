import java.util.*;

class HashArray{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        //Array declaration
        int n = sc.nextInt();
        int arr[] = new int[n];
        
        for(int i=0;i<n;i++)
            arr[i] = sc.nextInt();

        // precomputation of array elements
        int hash[] = new int[13];
        Arrays.fill(arr,0);
        for(int i=0;i<n;i++)
        {
            hash[arr[i]] =  hash[arr[i]] + 1;
        }

        
        for(int i=0;i<hash.length;i++)
        {
            System.out.print(hash[i]+" ");
        }

        //queries for array(like how many times the particular elements are availabale in the array)
            // int q = sc.nextInt();
            // while(q-- > 0)
            // {
            //     int number = sc.nextInt();
            //     System.out.println(hash[number]);
            // }
    }
}