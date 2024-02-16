public class SqrtUsingBS {

    static double morePrecision(int n, int precision, int tempSol)
    {
        double factor=1;
        double ans = tempSol;

        for (int i = 0; i < precision; i++) {
            factor/=10;

        for(double j=ans;j*j<n;j+=factor)
            ans=j;
        }
    return ans;
    }

    static int IntegerSqrt(int n)
    {
        int start = 0;
        int end = n;
        int ans =-1;
        while(start <= end)
        {
            int mid = start + (end - start) / 2;
            long sqrt =(long) mid*mid;
            if(sqrt <= n){
                ans = mid;
                start = mid+1;
            }
            else   
                end = mid-1;
        }
        return ans;
    }


    public static void main(String[] args) {
        int n = 27;
        int tempSol = IntegerSqrt(n);
        System.out.println("Sqrt of "+n+" is: "+morePrecision(n,3,tempSol));
    }
}
