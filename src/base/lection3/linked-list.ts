
class ListNode {
    value: number;
    prev: ListNode;
    next: ListNode;

    constructor(value: number, next: ListNode = null, prev: ListNode = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
export default class LinkedList {
    first: ListNode;
    last: ListNode;

    constructor(){
        this.first = null;
        this.last = null;
    }

    add(value: number){
        const newNode = new ListNode(value);
        if(!this.first && !this.last){
            this.first = newNode;
            this.last = newNode;
            return newNode;
        }

        this.last.next = newNode;
        newNode.prev = this.last;
        this.last = newNode;

        return newNode;
    }

    *[Symbol.iterator](){
        let current = this.first;
        yield current;
        while(current.next){
            current = current.next;
            yield current;
        }
    }
}