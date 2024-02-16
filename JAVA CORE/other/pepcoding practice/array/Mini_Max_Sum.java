public class Mini_Max_Sum {
    public static void main(String[] args) {
        // int arr[] = {1,3,5,7,9};
        int arr[] = {1,2,3,4,5};
        int n = arr.length;

        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for(int i=0;i<n;i++)
        {
            int sum=0;
            for(int j=0;j<n;j++)
            {
                if(i != j)
                    sum+=arr[j];    
            }
            System.out.println(sum);
            if(min> sum)
                min = sum;
            if(max < sum)
                max = sum;
        }
        System.out.println("Max = "+max+" Min = "+min);
    }
}
