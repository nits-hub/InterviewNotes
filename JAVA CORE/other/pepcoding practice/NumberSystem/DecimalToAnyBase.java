package NumberSystem;
import java.util.Collections;


import java.util.ArrayList;
import java.util.Scanner;

public class DecimalToAnyBase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the decimal number: ");
        int num = sc.nextInt();

        System.out.println("\nEnter the base in which you want to convert:");
        int tobase = sc.nextInt();

        ArrayList<Integer> list = new ArrayList<>();

        while(num>0)
        {
            int rem = num % tobase;
            list.add(rem);
            num/=tobase;
        }
        Collections.reverse(list);
        System.out.println(list);
    }
}
