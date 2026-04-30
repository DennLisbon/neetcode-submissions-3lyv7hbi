public class Solution {
    public bool IsValidSudoku(char[][] board) {
        HashSet<string> seen = new HashSet<string>();

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char number = board[i][j];

                if (number != '.') {
                    string rowKey = $"row_{i}_{number}";
                    string colKey = $"col_{j}_{number}";
                    string boxKey = $"box_{i / 3}_{j / 3}_{number}";

                    if (seen.Contains(rowKey) || 
                        seen.Contains(colKey) || 
                        seen.Contains(boxKey)) {
                        return false;
                    }

                    seen.Add(rowKey);
                    seen.Add(colKey);
                    seen.Add(boxKey);
                }
            }
        }

        return true;
    }
}