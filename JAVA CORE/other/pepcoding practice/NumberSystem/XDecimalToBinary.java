public class XDecimalToBinary{
    public static void main(String[] args) {
        
        int num=13;
        int bin=0;
        // conversion of decimal to binary()
        while(num != 0)
        {
            int rem = num % 2;
            bin = bin * 10 + rem;
            num/=2;
        }

        int cnum = bin;
        int revnum=0;
        while(cnum != 0)
        {
            int rem = cnum % 10;
            revnum = revnum * 10 + rem;
            cnum/=10; 
        }
        System.out.println(revnum);
    }
}