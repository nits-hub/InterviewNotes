import java.util.*;

class DuplicatesInArray{
    public static void main(String[] args) {
        int arr[] = {};
        HashMap<Integer,Integer> map = new HashMap<>();

        // Storing the array in Hashmap
        for(int i = 0;i < arr.length; i++)
        {
            if(map.containsKey(arr[i]))
            {

                int x = map.get(arr[i]);
                x++;
                map.put(arr[i],x);
            }
            else
            {
                map.put(arr[i],1);
            }
        }

        // System.out.println(map);

        // fetch the keys which have frequency more than 1
        ArrayList<Integer> list = new ArrayList<>();

        for(Map.Entry<Integer,Integer> e : map.entrySet())
        {
            if(e.getValue() > 1)
                list.add(e.getKey());
        }

    System.out.println(list);
    }
}