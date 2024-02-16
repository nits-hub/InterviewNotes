package NumberSystem;
import java.util.Scanner;
import java.util.Collections;
import java.util.ArrayList;

public class Base7 {
    public static String convertToBase7(int num) 
    {
        ArrayList<Integer> list = new ArrayList<>();

        while(num != 0){
            int rem = num % 7;
            list.add(rem);
            num/=7;
        }

        Collections.reverse(list);
        int sum=0;
        for(int i=0;i<list.size();i++){
            sum = sum * 10 + list.get(i);
        }
        String str = Integer.toString(sum);
        return str;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number: ");
        int num = sc.nextInt();

        String base7 = convertToBase7(num);
        System.out.println("Base7 of : " + num +" is " + base7);

        sc.close();
    }
}