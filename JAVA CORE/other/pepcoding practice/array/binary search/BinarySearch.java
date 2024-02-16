class BinarySearch{
    public static int binarysearch(int[] arr,int n,int target)
    {
        int start=0;
        int end = n-1;
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
        int even[] = {1,3,7,13,14,20,22,26};
        int tar1 = 11;
        
        System.out.println(binarysearch(even,even.length,tar1));
        int odd[] = {1,3,5,10,15,22,25,28,32};
        int tar2 = 28;
        System.out.println(binarysearch(odd,odd.length,tar2));
    }
}