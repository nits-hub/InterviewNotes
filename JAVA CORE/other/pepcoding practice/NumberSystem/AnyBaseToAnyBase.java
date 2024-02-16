package NumberSystem;
import java.util.ArrayList;
import java.util.Scanner;

public class AnyBaseToAnyBase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter number and its base no:");
        int num = sc.nextInt();
        int base1 = sc.nextInt();

        System.out.println("Enter the base no in which you want to convert: ");
        int base2 = sc.nextInt();

        ArrayList<Integer> list = new ArrayList<>();

        while(num!=0)
        {
            int rem = num % base2;
            list.add(rem);
            num/=base2;
        }


        int sum=0;
        for(int j=0;j<list.size();j++)
        {
            sum = sum + (int)(list.get(j) * (Math.pow(base1,j)));
        }
        System.out.println("Answer is: " + sum);
    }
}