class Stack {
    constructor(){
        this.items = []; 
    }

    // find elemment in the stack 
    // if found return the element 
    // else return undefined
    find(element){
        const found =  this.items.find(value => value == element);
        console.log(found)
    }
    // push element into the top of the stack
    push(element) {
        this.items.push(element);
    }

    // return the top most element in the stack 
    // and remove it from the stack 
    // under flow if the stack is empty
    pop(){
        if (this.items.length == 0)
            return "Underflow"; 
        return this.items.pop();
    }

    // return the size of the stack
    size(){
        return this.items.length
    }

    isEmpty(){
        // return true if stack is empty
        return this.items.length == 0; 
    }
}

var stack = new Stack(); 
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.find(2)
console.log(stack.isEmpty())
console.log(stack.size())