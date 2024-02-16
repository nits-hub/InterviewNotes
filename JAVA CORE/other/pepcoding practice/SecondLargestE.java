public class SecondLargestE {
    
    public static void main(String[] args) {
        int arr[] = {3,5,1,7,9,6};

        int largest=arr[0];

        //finds largest
        for(int i=1;i<arr.length;i++)
        {
            if(largest<arr[i])
                largest=arr[i];
        }

        //finds largest and assign it 0
        for(int i=0;i<arr.length;i++)
        {
            if(largest==arr[i])
                arr[i] = 0;
        }

        //finds largest which automatically becomes 2nd largest;
        int secondlargest=arr[0];
        for(int i=1;i<arr.length;i++)
        {
            if(secondlargest<arr[i])
                secondlargest=arr[i];
        }

System.out.println(largest);
System.out.println(secondlargest);

}
}