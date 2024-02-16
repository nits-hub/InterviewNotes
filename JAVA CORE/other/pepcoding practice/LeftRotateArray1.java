// Left Rotate array by k places

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.SystemMenuBar;

public class LeftRotateArray1 {
    static void LeftRotateArray(int nums[], int n, int k) {
        k = k % n;

        // Rotating the array to the left by 'K' steps
        int temp[] = new int[k];
        for (int i = 0; i < k; i++)
            temp[i] = nums[i];

        // shifting elements to the left
        for (int i = k; i < n; i++)
            nums[i - k] = nums[i];

        // moving temporary array elements to the nums array
        for (int i = n - k; i < n; i++) {
            nums[i] = temp[i - (n - k)];
        }
    }

    public static void main(String[] args) {

        int nums[] = {1,2,3,4,5,6,7};
        int n = nums.length;
        int k=3;

        LeftRotateArray(nums, n, k);
        for (int i : nums) {
        System.out.print(i+" ");
        }
}
}