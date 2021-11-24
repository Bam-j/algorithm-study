class UnionFind {
    constructor(elems) {
        this.count = elems.length;
        this.parent = {};
        elems.forEach(e =>{
            this.parent[e] = e;
        });
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) {
            return false;
        }

        if (rootX < rootY) {
            if(this.parent[y] !== y) {
                this.union(this.parent[y], x);
            }
            this.parent[y] = this.parent[x];
        }
        else {
            if(this.parent[x] !== x) {
                this.union(this.parent[x], y);
            }
            this.parent[x] = this.parent[y];
        }
    }

    find(x) {
        while (this.parent[x] !== x) {
            x = this.parent[x];
        }
        return x;
    }

    connect(x, y) {
        return this.find(x) === this.find(y);
    }
}