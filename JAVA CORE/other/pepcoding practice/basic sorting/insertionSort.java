public class insertionSort {
    public static void main(String[] args) {
        int arr[] = { 4, 5, 6, 3, 2, 1 };

        System.out.print("Array before sort: ");
        for (int j : arr) {
            System.out.print(j + " ");
        }

        for(int i=1;i<arr.length;i++)
        {
            int current = arr[i];
            int j = i - 1;
            while(j >= 0 && current < arr[j])
            {
                // right shift of big numbers
                arr[j+1] = arr[j];
                j--;
            }

            // placement
            arr[j+1] = current;
        }

        System.out.print("\nArray after Insertion sort: ");
        for (int i : arr) {
            System.out.print(i+" ");
        }
    }
}
