class HashTable {
    constructor(size) {
        this.size = size;
        this.table = [];
    }

    hash(key) {
        let id = 0;

        for (let i = 0; i < key.length; i++) {
            id += key.charCodeAt(1) * 100;
        }
        return id % this.size;
    }

    insert(key, value) {
        const id = this.hash(key);

        this.table[id] = value;
    }

    search(key) {
        const id = this.hash(key);
        const value = this.table[id];

        if (value) {
            return value;
        }
        else {
            return console.log('검색 실패');
        }
    }
}