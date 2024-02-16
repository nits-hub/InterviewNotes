import java.util.ArrayList;

public class ThreeSum {
    public static void findTriplets(int[] arr, int n, int targ)  {

        ArrayList<ArrayList<Integer>> listoflist = new ArrayList<>();

        for(int i=0;i<n-2;i++)
		{
			for(int j=i+1;j<n-1;j++)
			{
				for(int k=j+1;k<n;k++)
				{
					if((arr[i] + arr[j] + arr[k]) == targ)
					{
						ArrayList<Integer> list = new ArrayList<>();
						list.add(arr[i]);
						list.add(arr[j]);
						list.add(arr[k]);
						listoflist.add(list);
					}
				}
			}
		}

    for(ArrayList<Integer> list:listoflist)
    {
        for(int i: list)
        {
            System.out.print(i+" ");
        }
        System.out.println();
    }
}
    public static void main(String[] args) {
        int arr[] = {10, 5, 5, 5, 2};
        int n = arr.length;
        int targetSum =  12;
        findTriplets(arr, n, targetSum);
    }
}
