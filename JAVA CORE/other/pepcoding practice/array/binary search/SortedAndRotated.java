public class SortedAndRotated {

    public static int findpivot(int[] arr)
    {
        int start = 0;
        int end = arr.length - 1;
        while(start < end)
        {
            int mid = start + (end-start)/2;
            if(arr[mid] >= arr[0])
                start = mid+1;
            else    
                end = mid;
        }
        return start;
    }

    public static int binarysearch(int[] arr,int s,int e,int target)
    {
        int start=s;
        int end = e;
        while(start<=end)
        {
            int mid = start + (end - start)/2;
            if(arr[mid] == target)
                return mid;

            if(target < arr[mid])
                end = mid-1;
            else    
                start = mid + 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int nums[] = {4,5,6,7,0,1,2};
        int target = 0;

        int n = nums.length;
        int pivot = findpivot(nums); 
        if(nums[pivot] <= target && target <= nums[n-1])
            System.out.println(binarysearch(nums,pivot,n-1,target));
        else
            System.out.println(binarysearch(nums,0,pivot-1,target));
    }

}
