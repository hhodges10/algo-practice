module.require('./node');

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    getFirst() {
        return this.head;
    }
}

module.exports.LinkedList = LinkedList;
