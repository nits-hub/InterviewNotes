class Test {
    public String reverseWords(String str) {
        str = str.trim();
        
        StringBuilder sb = new StringBuilder();
        int st = str.length()-1;
        int e = str.length()-1;

        while(st >= 0)
        {
            if(str.charAt(st) != ' '){
                st--;
            }
            else{
                String temp = str.substring(st+1, e+1);
                sb.append(temp);
                sb.append(" ");
                st--;
                e = st;
            }
            sb.append(str.substring(st+1, e));
        }
        return sb.toString();
    }

    public class ReverseWord{
        public static void main(String[] args) {
            Test t1 = new Test();
            String message = t1.reverseWords("aao !tution, me ma tummm tution");
            System.out.println(message);
        }
    }
}