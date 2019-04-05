class Node{
    constructor(element){
        this.element = element ;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }


    //adding an element in the linked list
    add(element){
        var newNode = new Node(element);

        var current;

        if(this.head == null){
            this.head = newNode;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;

    }

    //printing the linked list
    printList(){
        
        var curr = this.head;
        var str = "";

        //To iterate over the list use curr != null
        while(curr != null){
            str += " " +curr.element;
            curr = curr.next;
        }
        console.log(str);
    }

    

    isPalindrome(){
        var curr = this.head;
        var newCurr = this.head;
        var stack = [];

        while(curr){
            stack.push(curr.element);
            curr = curr.next;
        }

        while(newCurr){
            var e = stack.pop();

            if(e != newCurr.element){
                console.log("not a palindrome");
                return false;
            }
            newCurr = newCurr.next;
        }

        console.log("is a palindrome");
        return true;
    }
}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(40);
l1.add(50);
l1.add(40);
l1.add(20);
l1.add(10);

l1.printList();
l1.isPalindrome();