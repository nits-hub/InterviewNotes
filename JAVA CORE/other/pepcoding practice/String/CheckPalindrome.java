public class CheckPalindrome {
    static boolean isValid(char ch)
    {
        if((ch>='A' && ch<='Z') && (ch>='a' && ch<='z') && (ch>='0' && ch<='9'))
            return true;

        return false;
    }

    static String toLowercase(char ch)
    {
        if((ch >= 'a' && ch <='z') || (ch >='0' && ch <= '9'))
            return ch+"";
        else{
            ch = (char)(ch - 'A' + 'a');
            return ch+"";
        }
    }

    static boolean isPalindrome(String s)
    {
        StringBuilder sb = new StringBuilder();

        // checking valid characters
        for(int i = 0;i < s.length(); i++){
            if(isValid(s.charAt(i)))
                sb.append(s.charAt(i));
        }
        
        // convert to lowercase
        for(int i = 0;i < sb.length(); i++){
            String temp = sb.toLowercase(sb.charAt(i));
            sb.replace(i, i+1, temp);
        }
    }


    public static void main(String[] args) {
        String str = "A man, a plan, a canal: Panama";





    }
}
