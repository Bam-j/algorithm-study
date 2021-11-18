class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enQueue(data) {
        const newNode = new Node(data);

        if(!this.front) {
            this.front = newNode;
        }
        else {
            this.rear.nextNode = newNode;
        }

        this.rear = newNode;
        this.size++;
    }

    deQueue() {
        if (!this.front) {
            return false;
        }

        this.front = this.front.nextNode;
        this.size--;
    }

    peak() {
        return this.front.data;
    }
}