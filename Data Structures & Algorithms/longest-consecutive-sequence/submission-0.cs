public class Solution {
    public int LongestConsecutive(int[] nums) {
        if (nums == null || nums.Length == 0) return 0;
        var set = new HashSet<int>(nums);
        int best = 0;
        foreach (var n in set) {
            // only start counting at sequence starts
            if (!set.Contains(n - 1)) {
                int length = 1;
                int cur = n;
                while (set.Contains(cur + 1)) {
                    cur++;
                    length++;
                }
                if (length > best) best = length;
            }
        }
        return best;
    }
}
