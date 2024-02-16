import java.util.HashMap;
import java.util.Map;
import java.util.Set;

class HashmapDemo{
    public static void main(String[] args)
    {
        // key=country, value=population
        HashMap<String,Integer> map = new HashMap<>();

        // INSERTION
        map.put("India", 130);
        map.put("China",150);
        map.put("US",30);
        System.out.println(map);

        map.put("China",180);
        System.out.println(map);

        // Search
        if(map.containsKey("China"))
            System.out.println("Key is present in the map");
        else
            System.out.println("Key is not present in the map");

            System.out.println(map.get("China"));   //if key exist in map return value
            System.out.println(map.get("Indonesia"));   //if key doesn't exist in map return null

        // 1st way to iterate through entrySet() 
        // Iteration in hashmap - similar as iteration through array using for-each loop
        // first Integer is for Key, and second is for Value
        // Map.Entry<Integer,Integer> e : Map.entrySet();

        for (Map.Entry<String,Integer> e : map.entrySet()) 
        {
            System.out.print(e.getKey() +": "+ e.getValue() );
            System.out.println();
        }


        // 2nd way to iterate through keySet
        Set<String> keys =  map.keySet();
        for (String key : keys) {
            System.out.println(key +": "+map.get(key));
        }
        
        
        // Remove key from map
        map.remove("China");
        System.out.println(map);
    }
}