const linkedList = require('./linked-list');
const listNode = require('./node');
let node1, node2, node3, node4, lList;

beforeEach(() => {
    node1 = new listNode.Node(2);
    node2 = new listNode.Node(5);
    node3 = new listNode.Node(8);
    node4 = new listNode.Node(10);
    node3.next = node4;
    node2.next = node3;
    node1.next = node2;

    lList = new linkedList.LinkedList(node1);
});

describe('LinkedList', () => {
    test('should be created', () => {
        expect(lList.head.next.data).toEqual(5);
    });

    test('size() should return number of items in list', () => {
        expect(lList.size()).toEqual(4);
    });

    test('clear() should remove all nodes from list', () => {
        expect(lList.size()).toEqual(4);
        lList.clear();
        expect(lList.size()).toEqual(0);
    });

    test('getLast() should return last node in list with many nodes', () => {
        expect(lList.getLast()).toEqual(node4);
    });

    test('getLast() should return the only node in list with one node', () => {
        let testNode = new listNode.Node(1);
        let testList = new linkedList.LinkedList(testNode);
        expect(testList.getLast()).toEqual(testNode);
    });

    test('getFirst() returns first node in list', () => {
        expect(lList.getFirst()).toEqual(node1);
    });
});
