public class XBinaryToDecimal {
    public static void main(String[] args) {
        int bin = 1101;
        int decimal=0;
        int i=0;
        while(bin != 0)
        {
            int rem = bin % 10;
            decimal = decimal + rem * (int)Math.pow(2,i);
            bin/=10;
            i++;
        }

        System.out.println(decimal);
    }
}
