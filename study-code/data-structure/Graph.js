class Graph {
    constructor() {
        this.size = 0;
        this.firstVertex = null;
    }

    insertVertex(key) {
        const newVertex = new Vertex(key);
        let last = this.firstVertex;

        if (last === null) {
            this.firstVertex = newVertex;
        }
        else {
            while (last.nextVertex !== null) {
                last = last.nextVertex;
            }
            last.nextVertex = newVertex;
        }
        this.size++;
    }

    insertEdge(data, tail, head) {
        let tailVertex = this.firstVertex;
        let headVertex = this.firstVertex;

        while (tailVertex && tailVertex.key !== tail) {
            tailVertex = tailVertex.nextVertex;
        }
        while (headVertex && headVertex.key !== head) {
            headVertex = headVertex.nextVertex;
        }

        if (tailVertex === null || headVertex === null) {
            return false;
        }

        const newEdge = new Edge(data, headVertex);
        let lastEdge = tail.edge;

        if (lastEdge !== null) {
            while (lastEdge.nextEdge !== null) {
                lastEdge = lastEdge.nextEdge;
            }
            lastEdge.nextEdge = newEdge;
        }
        else {
            tail.edge = newEdge;
        }
    }
}