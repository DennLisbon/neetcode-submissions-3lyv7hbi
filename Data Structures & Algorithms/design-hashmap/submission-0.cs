public class MyHashMap {
    private class Node {
        public int Key;
        public int Value;
        public Node Next;

        public Node(int key, int value) {
            this.Key = key;
            this.Value = value;
        }
    }

    private const int Size = 10007;
    private Node[] _buckets;

    public MyHashMap() {
        _buckets = new Node[Size];
    }

    private int GetHash(int key) {
        return key % Size;
    }

    public void Put(int key, int value) {
        int index = GetHash(key);
        
        if (_buckets[index] == null) {
            _buckets[index] = new Node(key, value);
            return;
        }

        Node current = _buckets[index];
        while (true) {
            if (current.Key == key) {
                current.Value = value;
                return;
            }
            if (current.Next == null) break;
            current = current.Next;
        }

        current.Next = new Node(key, value);
    }

    public int Get(int key) {
        int index = GetHash(key);
        Node current = _buckets[index];

        while (current != null) {
            if (current.Key == key) {
                return current.Value;
            }
            current = current.Next;
        }

        return -1; 
    }

    public void Remove(int key) {
        int index = GetHash(key);
        Node current = _buckets[index];
        Node prev = null;

        while (current != null) {
            if (current.Key == key) {
                if (prev == null) {
                    _buckets[index] = current.Next;
                } else {
                    prev.Next = current.Next;
                }
                return;
            }
            prev = current;
            current = current.Next;
        }
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.Put(key,value);
 * int param_2 = obj.Get(key);
 * obj.Remove(key);
 */