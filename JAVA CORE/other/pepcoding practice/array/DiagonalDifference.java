public class DiagonalDifference {
    public static void main(String[] args) {
        int A[][] ={
                    {1,2,3},
                    {4,5,6},
                    {9,8,9}
                   };

        int sum1=0;
        int sum2=0;
        int ind=A[0].length-1;

        for(int i=0;i<A.length;i++)
        {
            for(int j=0;j<A[0].length;j++)
            {
                if(i == j)
                    sum1+=A[i][j];

                if(j == ind){
                    sum2+=A[i][j];
                    ind--;
                }
            }
        }
        System.out.println("Diagonal 1 "+sum1);
        System.out.println("Diagonal 2 "+sum2);
        System.out.println("Difference: " + Math.abs(sum1-sum2));
    }
}
