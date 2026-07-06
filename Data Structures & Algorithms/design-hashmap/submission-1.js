class MyHashMap {
    constructor() {
        // A prime number size helps distribute keys uniformly
        this.size = 10007; 
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    /** * Helper to compute the bucket index
     * @param {number} key
     * @return {number}
     */
    _hash(key) {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const idx = this._hash(key);
        const bucket = this.buckets[idx];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Key exists, update value
                return;
            }
        }
        
        // Key does not exist, insert new pair
        bucket.push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const idx = this._hash(key);
        const bucket = this.buckets[idx];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]; // Found
            }
        }
        
        return -1; // Not found
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const idx = this._hash(key);
        const bucket = this.buckets[idx];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the element from the bucket
                return;
            }
        }
    }
}
