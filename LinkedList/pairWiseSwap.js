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

    pairWiseSwap(){
        var temp = this.head;
        var k;

        while(temp != null && temp.next != null){
            k = temp.element;
            temp.element = temp.next.element;
            temp.next.element = k;

            temp = temp.next.next;
        }
    }

}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(40);
l1.add(50);
l1.add(60);

l1.printList();
console.log("after pair wise swap :")
l1.pairWiseSwap();
l1.printList();