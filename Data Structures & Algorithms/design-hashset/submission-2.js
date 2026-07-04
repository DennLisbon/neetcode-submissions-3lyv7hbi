class MyHashSet {
    constructor() {
        // A prime number reduces the likelihood of hash collisions
        this.base = 769;
        this.buckets = Array.from({ length: this.base }, () => []);
    }

    /**
     * Helper method to get the bucket index for a given key
     * @param {number} key
     * @return {number}
     */
    _hash(key) {
        return key % this.base;
    }

    /** * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        // Only add if the key doesn't already exist to maintain uniqueness
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /** * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        const keyIndex = bucket.indexOf(key);
        // If the key exists, remove it from the bucket
        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1);
        }
    }

    /** * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        return bucket.includes(key);
    }
}
