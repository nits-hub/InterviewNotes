class bubbleSort{
    public static void main(String[] args) {
        int arr[] = {4,5,6,3,2,1};

        System.out.print("Array before sort: ");
        for (int i : arr) {
            System.out.print(i+" ");
        }
        
        for(int i=arr.length-1;i>=0;i--)
        {
            for(int j=0;j<i;j++)
            {
                if(arr[j] > arr[j+1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        
        System.out.print("\nArray after bubble sort:");
        for (int i : arr) {
            System.out.print(i+" ");
        }
    }
}