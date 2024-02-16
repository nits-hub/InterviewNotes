public class RightRotateArray1 {

    static void RightRotateArray(int nums[],int n,int k)
    {
        k = k % n;
        int temp[] = new int[k];
        for(int i=n-k;i<n;i++)
            temp[i-(n-k)] = nums[i];

        for(int i=n-k-1;i>=0;i--)
            nums[i+k] = nums[i];

        for(int i=0;i<k;i++)
            nums[i] = temp[i];
    }

    public static void main(String[] args) {
        int nums[] = {1,2,3,4,5,6,7};
        int n = nums.length;
        int k=8;

        RightRotateArray(nums, n, k);

        for (int i : nums)
            System.out.print(i+" ");
    }
}
