public class missingNumber {
    public static void main(String[] args) {
        int arr[] = {2};
        int sum=0,max=arr[0];
        for(int i=0;i<arr.length;i++){
            sum+=arr[i];
            if(max < arr[i])
                max=arr[i];
        }
        int actualSum = max*(max+1)/2;
        int missingElement = actualSum  - sum;
        System.out.println(missingElement + ":     missingElement");
    }
}
