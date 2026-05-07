public class Solution {
    public List<int> MajorityElement(int[] nums) {
        int n = nums.Length;
        if (n == 0) return new List<int>();

        int? cand1 = null, cand2 = null;
        int count1 = 0, count2 = 0;

        foreach (int num in nums) {
            if (cand1.HasValue && num == cand1.Value) {
                count1++;
            } else if (cand2.HasValue && num == cand2.Value) {
                count2++;
            } else if (count1 == 0) {
                cand1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                cand2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0; count2 = 0;
        foreach (int num in nums) {
            if (cand1.HasValue && num == cand1.Value) count1++;
            else if (cand2.HasValue && num == cand2.Value) count2++;
        }

        var result = new List<int>();
        int threshold = n / 3;
        if (cand1.HasValue && count1 > threshold) result.Add(cand1.Value);
        if (cand2.HasValue && count2 > threshold) result.Add(cand2.Value);

        return result;
    }
}
