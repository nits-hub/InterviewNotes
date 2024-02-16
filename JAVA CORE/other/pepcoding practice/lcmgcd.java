public class lcmgcd {
    public static void main(String[] args) {
        Long A=5L,B=10L;
        Long AA=5L,BB=10L;
        Long div =2L;
        Long lcm = 1L;
        
         
        
        //gcd
        Long gcd = AA * BB/lcm;
        Long arr[]={lcm,gcd};

        System.out.println(arr[0]+" "+arr[1]);
    }
}
