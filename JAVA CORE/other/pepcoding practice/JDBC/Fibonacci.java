public class Fibonacci {
    public static void main(String[] args) {
        int n=9;
        int a=0,b=1;
        System.out.println(a+"\n"+b);

        for (int i = 2; i < n; i++) {
            int sum=a+b;
            System.out.println(sum);
            a=b;
            b=sum;
        }
    }
}
