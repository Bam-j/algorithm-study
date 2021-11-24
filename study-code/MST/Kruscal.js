class Kruscal {
    constructor(vertex, edge) {
        this.vertex = new UnionFind(vertex);
        this.edge = edge;
        this.graph = [];
    }

    findMinimumEdge() {
        this.edge.sort((a, b) => a[2]- b[2]);

        let minimumWeight = this.edge.shift();
        const result = this.edge.union(minimumWeight[0], minimumWeight[1]);

        if (result) {
            this.graph.push(minimumWeight);
        }
    }
}