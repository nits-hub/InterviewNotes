// in case of sorted array
public class FirstnLastOccurrence {

    public static int lastOcc(int arr[], int n, int target) {
        int start = 0;
        int end = n - 1;
        int ans = -1;
        int mid = start + (end - start) / 2;
        while (start <= end) {
            // System.out.println("step1: "+ mid);
            if (target == arr[mid]){
                ans = mid;
                start = mid+1;
            }
            else if (target > arr[mid])
                start = mid + 1;
            else
                end = mid - 1;

            mid = start + (end - start) / 2;
        }
        return ans;
    }

    public static int firstOcc(int arr[], int n, int target) {
        int start = 0;
        int end = n - 1;
        int ans = -1;
        int mid = start + (end - start) / 2;
        while (start <= end) {
            if (target == arr[mid]){
                ans = mid;
                end = mid-1;
            }
            else if (target < arr[mid])
                end = mid - 1;
            else
                start = mid + 1;

            mid = start + (end - start) / 2;
        }
        return ans;
    }

    public static void main(String[] args) {
        int arr[] = { 0, 0, 5, 5, 6, 6, 6 };
        int target = 3;
        System.out.println("firstOccurrence of " + target + " is at index " + firstOcc(arr, arr.length, target));
        System.out.println("laststOccurrence of " + target + " is at index " + lastOcc(arr, arr.length, target));
    }
}