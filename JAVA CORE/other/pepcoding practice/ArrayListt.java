import java.util.ArrayList;
import java.util.Collections;

public class ArrayListt {
    public static void main(String[] args) {
       ArrayList<Integer> list = new ArrayList<Integer>();

       //add elements to the list
       list.add(1);
       list.add(8);
       list.add(4);
       System.out.println(list);

       //get elements
       int element = list.get(0);
       System.out.println(element);

       //add elements in between
       list.add(1,1);
       System.out.println(list);

       //set elements to modify elements
       list.set(0,5);
       System.out.println(list);

       //delete elements
       list.remove(0);
       System.out.println(list);

       //size
       int size = list.size();
       System.out.println(size);

       //loops
       for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i)+" ");
       }
       System.out.println();

       //sorting
       Collections.sort(list);
       System.out.println(list);

       //reverse the order
       Collections.reverse(list);
       System.out.println(list);
    }
}
