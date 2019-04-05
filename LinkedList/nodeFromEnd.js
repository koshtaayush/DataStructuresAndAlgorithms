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

    sortedMerge(l1, l2){
        var dummy = new Node(0);
        var tail = dummy;

        while(true){
            if(l1 == null){
                tail.next = l2;
                break;
            }

            if(l2 == null){
                tail.next = l1;
                break;
            }

            if(l1.element < l2.element){
                tail.next = l1;
                l1 = l1.next;
            }else{
                tail2.next = l2;
                l2 = l2.next;
            }

            tail = tail.next;
        }

        return dummy.next;
    }
    
}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
l1.add(50);
l1.add(60);

l1.printList();

var l2 = new LinkedList();

l2.add(2);
l2.add(14);
l2.add(17);
l2.add(32);
l2.add(45);
l2.add(60);

l2.printList();

sortedMerge(l1, l2);