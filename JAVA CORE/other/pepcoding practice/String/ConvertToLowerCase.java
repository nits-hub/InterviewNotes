class ConvertToLowercase{
    static String ConvertToLowerCaseString(String str)
    {
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<str.length();i++)
        {
            if(str.charAt(i) >= 'a' && str.charAt(i) <='z' || str.charAt(i) == ' ')
                sb.append(str.charAt(i));
            else 
            {
                char temp = str.charAt(i);
                temp+=32;
                sb.append(temp);
            }
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        System.out.println(ConvertToLowerCaseString("HElLO WORLd"));
    }
}