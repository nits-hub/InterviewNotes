public class PivotInArray {
    public static int findpivot(int[] arr)
    {
        int start = 0;
        int end = arr.length-1;
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
    public static void main(String[] args) {
        int arr[] = {3,8,10,17,1};
        int index = findpivot(arr);
        System.out.println("Pivot is : "+arr[index]+" at index "+ index);
    }
}