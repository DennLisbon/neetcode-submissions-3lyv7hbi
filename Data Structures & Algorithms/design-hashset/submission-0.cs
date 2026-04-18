public class MyHashSet {
    private readonly int _numBuckets = 7919;
    private List<int>[] _buckets;

    public MyHashSet() {
        _buckets = new List<int>[_numBuckets];
    }
    
    private int _hash(int key) {
        return key % _numBuckets;
    }

    public void Add(int key) {
        int index = _hash(key);
        if (_buckets[index] == null) {
            _buckets[index] = new List<int>();
        }
        
        if (!_buckets[index].Contains(key)) {
            _buckets[index].Add(key);
        }
    }
    
    public void Remove(int key) {
        int index = _hash(key);
        if (_buckets[index] != null) {
            _buckets[index].Remove(key);
        }
    }
    
    public bool Contains(int key) {
        int index = _hash(key);
        return _buckets[index] != null && _buckets[index].Contains(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.Add(key);
 * obj.Remove(key);
 * bool param_3 = obj.Contains(key);
 */