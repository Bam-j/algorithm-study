class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNode(data) {
        const newNode = new Node(data);
        let current = this.head;

        if (this.size === 0) {
            this.head = new Node(data, this.head);
            this.size++;
        }
        else {
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
            this.size++;
        }
    }

    searchNode(index) {
        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.nextNode;
            count++;
        }

        return current.data;
    }

    removeNode(index) {
        let current = this.head;
        let preNode;
        let removeNode;
        let count = 0;

        if (index === 0) {
            this.head = this.head.nextNode;
            this.size--;
        }
        else {
            while (count < index) {
                preNode = current;
                current = current.nextNode;
                count++;
            }

            removeNode = current;
            preNode = removeNode.nextNode;
            this.size--;
        }
    }
}