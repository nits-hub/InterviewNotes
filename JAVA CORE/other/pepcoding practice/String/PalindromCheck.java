package String;

import javax.swing.plaf.TreeUI;

public class PalindromCheck {
    public static void main(String[] args) {
        String str="c1 O$d@eeD o1c";
        int start=0;
        int end=str.length()-1;
        boolean fl=false;
        while(start<end)
        {
			String s1 = str.charAt(start)+"";
			String s2 = str.charAt(end)+"";
			System.out.print(s1+" "+s2);
            if(str.charAt(start) == ' '){
                start++;

			}

            else if(str.charAt(end) == ' '){

                end--;
			}

            else if(s1.equalsIgnoreCase(s2)){
                start++;end--;
            }
            else{
                fl=true;
                break;
            }
        }
        System.out.println();
        if(fl){
            System.out.println("false");
        }
        else{
            System.out.println("true");
        }
    }
}
