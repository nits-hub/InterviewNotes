class ConvertToUpperCase{

    static String ConvertToUpperCaseString(String str)
    {
        StringBuilder sb  = new StringBuilder();
        for(int i=0;i<str.length();i++)
        {
            if(str.charAt(i)>='A' && str.charAt(i)<='Z' || str.charAt(i) == ' ')
                sb.append(str.charAt(i));
            else
            {
                char temp = str.charAt(i);
                temp-=32;
                sb.append(temp);
            }
        }
        return sb.toString();
    }
    public static void main(String args[])
    {
        System.out.println(ConvertToUpperCaseString("Hello worlD"));
    }
}
