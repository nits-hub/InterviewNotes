public class PeakIndexInAMountainArray {
    public static void main(String[] args) {
        int arr[] = {0,1,3,2,1};

        int i=0;
        int mid = arr.length/2;
        int flag=0; //0 indicates true //1 indicates false
        while(i<mid)
        {
            if(!(arr[i] < arr[i+1])){
                flag=1;
                break;
            }
            i++;
        }

        i=mid;
        if(flag == 0){
        while(i>arr.length-1)
        {
            if(!(arr[i] < arr[i+1])){
                flag=1;
                break;
            }
            i++;
        }
    }
    if(flag == 0)
    System.out.println("arr is a mountain array");
    else    
    System.out.println("arr is not a mountain array");
    }
}
