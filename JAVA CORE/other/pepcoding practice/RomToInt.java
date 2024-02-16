public class RomToInt {
    public static void main(String[] args) {
        String str = "MCDXCV";  //"1495"
        int num=0;

        String roman[] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        int integer[] =  {1000, 900, 500, 400, 100,   90,  50,   40,  10,   9,    5,   4,    1};

        for (int i = 0; i<str.length(); i++) 
        {
            for(int j = i+1; j<= i+1; j++)
            {   
                String temp = "";
                temp = temp + str.charAt(i) + str.charAt(j);
                
                    for(int k=0;k<=roman.length;k++)
                    {
                        if(roman[k] == temp){
                            num+=integer[k];
                            i++;
                            break;
                        }
                    }
                }
            }
        }
    }
}