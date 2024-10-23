class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

 
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  
  pop() {
    if (!this.head) throw new Error("List is empty");

    if (this.head === this.tail) {
      const value = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const value = this.tail.val;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return value;
  }

  
  shift() {
    if (!this.head) throw new Error("List is empty");

    const value = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // If list becomes empty
    this.length--;
    return value;
  }

  
  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

 
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Index is invalid");

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    const value = current.next.val;
    current.next = current.next.next;
    this.length--;
    return value;
  }

  
  average() {
    if (!this.head) return 0; 

    let total = 0;
    let count = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      count++;
      current = current.next;
    }

    return total / count;
  }
}

module.exports = LinkedList;
