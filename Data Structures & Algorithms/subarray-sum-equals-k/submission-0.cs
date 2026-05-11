public class Solution {
    public int SubarraySum(int[] nums, int k) {
        var counts = new Dictionary<int, int>();
        counts[0] = 1;
        int sum = 0;
        int result = 0;
        
        foreach (var num in nums) {
            sum += num;
            int need = sum - k;
            if (counts.TryGetValue(need, out int c)) result += c;
            if (counts.ContainsKey(sum)) counts[sum] += 1;
            else counts[sum] = 1;
        }
        
        return result;
    }
}
