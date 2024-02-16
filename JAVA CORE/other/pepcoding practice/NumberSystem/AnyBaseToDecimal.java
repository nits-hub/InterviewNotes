package NumberSystem;
import java.util.Scanner;
import java.util.ArrayList;

public class AnyBaseToDecimal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter number and its base no:");
        int num = sc.nextInt();
        int base = sc.nextInt();

        int tobase = 10;

        ArrayList<Integer> list = new ArrayList<>();
        while(num>0)
        {
            int rem = num % tobase;
            list.add(rem);
            num/=tobase;
        }

        int sum=0;
        for(int j=0;j<list.size();j++)
        {
            sum = sum + (int)(list.get(j) * (Math.pow(base,j)));
        }
        System.out.println("Number in decimal is: "+sum);
        sc.close();
    }
}