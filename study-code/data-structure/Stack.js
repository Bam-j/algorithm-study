class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);

        newNode.nextNode = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.top === null) {
            return false;
        }

        this.top = this.top.nextNode;
        this.size--;
    }

    peak() {
        return this.top.data;
    }
}