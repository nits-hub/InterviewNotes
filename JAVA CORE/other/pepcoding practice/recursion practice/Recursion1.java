// program to print number from 1 to 5;
public class Recursion1 {
    static void fun(int n){
        if(n==5){
            System.out.println(n);
            return;
        }
        System.out.println(n);
        fun(n+1);
    }
    public static void main(String[] args) {
        fun(1);
    }
}
