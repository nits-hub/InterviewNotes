package NumberSystem;
import java.util.*;
public class DecimalToOther{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int hnum,onum;
        
        //input of decimal number
        System.out.println("Enter Decimal number: ");
        int bnum = sc.nextInt();
        hnum = onum = bnum;



        //Binary conversion of decimal number
        int binary=2;
        ArrayList<Integer> listOfBinary = new ArrayList<>();
        
        System.out.print("Binary equivalent of decimal: "+bnum+" is ");
        while(bnum>0)
        {
            int rem = bnum % binary;
            listOfBinary.add(rem);
            bnum/=2;
        }

        Collections.reverse(listOfBinary);
        System.out.println(listOfBinary);



        //Octal conversion of decimal number
        int octal=8;
        ArrayList<Integer> listOfOctal  = new ArrayList<>();

        System.out.print("Octal equivalent of decimal: "+onum+" is ");
        while(onum>0)
        {
            int rem = onum % octal;
            listOfOctal.add(rem);
            onum/=8;
        }
        
        Collections.reverse(listOfOctal);
        System.out.println(listOfOctal);

        

        //Hexadecimal conversion of decimal number
        int hexadecimal=16;
        ArrayList<Integer> listOfHexaDecimal = new ArrayList<>();

        System.out.print("HexaDecimal equivalent of decimal: "+hnum+" is ");
        while(hnum>0)
        {
            int rem = hnum % hexadecimal;
            listOfHexaDecimal.add(rem);
            hnum/=16;
        }
        
        Collections.reverse(listOfHexaDecimal);
        System.out.println(listOfHexaDecimal);
    }
}