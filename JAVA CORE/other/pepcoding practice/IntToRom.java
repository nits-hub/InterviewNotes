public class IntToRom {
    public static void main(String[] args)throws Exception {
        int num=2225;
        String str="";

        String roman[] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        int integer[] =  {1000, 900, 500, 400, 100,   90,  50,   40,  10,   9,    5,   4,    1};


        for (int i = 0; num > 0; i++) {
            while(num >= integer[i]){
                num-=integer[i];
                str+=roman[i];
            }
        }
        System.out.println(str);
    }
}
