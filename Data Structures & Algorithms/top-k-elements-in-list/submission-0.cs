public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int, int> counts = new Dictionary<int, int>();
        foreach (int n in nums) {
            if (counts.ContainsKey(n))
                counts[n]++;
            else
                counts[n] = 1;
        }

        PriorityQueue<int, int> minHeap = new PriorityQueue<int, int>();

        foreach (var entry in counts) {
            minHeap.Enqueue(entry.Key, entry.Value);

            if (minHeap.Count > k) {
                minHeap.Dequeue();
            }
        }

        int[] result = new int[k];
        int index = 0;
        while (minHeap.Count > 0) {
            result[index++] = minHeap.Dequeue();
        }

        return result;
    }
}
