// string palindrom check
public class Recursion4 {
    static boolean isPalindrome(String str,int start,int end){
        if(start>=end)
            return true;
        return (str.charAt(start) == str.charAt(end) && isPalindrome(str, start+1, end-1));
    }
    public static void main(String[] args) {
        String str = "acbca";
        int start=0;
        int end=str.length();
        boolean bool = isPalindrome(str,start,end-1);

        if(bool == true)
            System.out.println("String is palindrome");
        else
            System.out.println("String is not a palindrome");
    }
}
