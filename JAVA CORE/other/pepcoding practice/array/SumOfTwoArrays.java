import java.util.*;
public class SumOfTwoArrays {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        // int A[] = {1, 2, 3, 4};
        // int B[] = {6};

        // int A[] = {6};
        // int B[] = {1, 2, 3, 4};

        int A[] = {9, 9, 9};
        int B[] = {9, 9, 9};

        int e1 = A.length - 1;
        int e2 = B.length - 1;

        int carry = 0;
        while(e1 >= 0 && e2 >= 0)
        {
            int sum = A[e1] + B[e2] + carry;
            carry = sum / 10;
            sum = sum % 10;
            list.add(0,sum);
            e1--;e2--;
        }

        // first-case,   Where A[] has more element than B[]
        while(e1 >= 0 )
        {
            int sum = A[e1] + carry;
            carry = sum / 10;
            sum = sum % 10;
            list.add(0,sum);
            e1--;
        }

         // second-case,   Where B[] has more element than A[]
        while(e2 >= 0 )
        {
            int sum = B[e2] + carry;
            carry = sum / 10;
            sum = sum % 10;
            list.add(0,sum);
            e2--;
        }

        // second-case,   Where B[] has more element than A[]
        while(carry != 0)
        {
            int sum = carry;
            carry = sum / 10;
            sum = sum % 10;
            list.add(0,sum);
        }

        System.out.println(list);
    }
}
