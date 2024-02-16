// sum of digits of a number
public class Recursion5 {
    static int sumOfDigit(int n){
        if(n/10 == 0)
            return n%10;
        return (n%10) + sumOfDigit(n/10);
    }
    public static void main(String[] args) {
        int n=32143;
        int sum = sumOfDigit(n);
        System.out.println(sum);
    }
}
