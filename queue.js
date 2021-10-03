/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // initiate newNode 
    let newNode = new Node(val) 
    // case: check if queue is empty 
    if(this.size === 0) {
      // add the node to the queue 
      this.first = newNode 
      this.last = newNode
      this.size++ 
    } else {
      this.last.next = newNode 
      this.last = newNode 
      this.size++ 
    }

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // case: check if queue is empty 
    if(this.size === 0) {
      throw new Error("Can't Dequeue, Queue is empty...")
    }

    let data = this.first 

    // case: check if size of the queue is 1 
    if(this.size === 1) {
      // first is first 
      this.first = data 
      this.last = null 

    } 
    this.first = this.first.next 
    this.size-- 
    return data.val 
    
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val 
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true: false 
  }
}

module.exports = Queue;
