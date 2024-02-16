import java.util.ArrayList;

public class Intersection {
    public static void findArrayIntersection(ArrayList<Integer> arr1, int n, ArrayList<Integer> arr2, int m)
	{
		// Write Your Code Here.
        ArrayList<Integer> list = new ArrayList<>();
            for (int i = 0; i < n; i++) 
            {
                for (int j = 0; j < m; j++) 
                {
                    if(arr1.get(i) == arr2.get(j))
                    {
                        // list.add(arr1.get(i));
                        list.add(arr2.remove(j));
                        break;
                    }
                }
            }

        if(list.isEmpty())
            System.out.println("list is empty");
        else
            System.out.println(list);
        // return list;
	}
    public static void main(String[] args) {
        ArrayList<Integer> arr2 = new ArrayList<>();
        arr2.add(1);
        arr2.add(2);
        arr2.add(2);
        arr2.add(2);
        arr2.add(3);
        arr2.add(4);

        ArrayList<Integer> arr1 = new ArrayList<>();
        arr1.add(2);
        arr1.add(2);
        arr1.add(3);
        arr1.add(4);

        findArrayIntersection(arr1,arr1.size(),arr2,arr2.size());
    }
}