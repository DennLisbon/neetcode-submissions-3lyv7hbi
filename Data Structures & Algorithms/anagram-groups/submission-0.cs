public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        var groups = new Dictionary<string, List<string>>();

        foreach (string s in strs) {
            char[] hash = s.ToCharArray();
            Array.Sort(hash);
            string key = new string(hash);

            if (!groups.ContainsKey(key)) {
                groups[key] = new List<string>();
            }

            groups[key].Add(s);
        }

        return groups.Values.ToList();
    }
}
