package LinkedList;

public class LinkedList {

    Node head; //store the reference to the first node of the linkedList

    void insertAtBegn(int val){
        // create a new node
        Node n = new Node();
        n.val = val;
        if(this.head == null){
            this.head = n;
            return;
        }else{
            // Node temp will point to head
            Node temp = head;
            // n will become the new head of the list
            head = n;
            // Node temp(previous head) will be added after new head
            head.next = temp;
        }
        
    }

    void insertAtEnd(int val){
        //create a new node
        Node n = new Node();
        n.val = val;
        if(this.head == null){
            this.head = n;
            return;
        }
        // n.next = null;

        //now i need to travrse to the last node
        Node temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        // temp is now storing the refernce to the last node
        temp.next = n;
        return;
    }

    void printLinkedlist(){
        Node temp = head; // temp = this.head
        while(temp != null){
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
    }

    void printReverse(Node head){ //just printing the LL in reversed order; not actaully modifying the LL
        if(head == null)
            return;
            printReverse(head.next);
            System.out.println(head.val + " ");
    }

    void deleteNode(int val){
        if(head == null){
            return;
        }

        Node prev = null, curr = head;
        while(curr != null && curr.val != val){
            prev = curr; //moving forward prev will become curr
            curr = curr.next; //moving forward curr will become curr.next
        }
        // curr will point to the node that has 'val' value
        // if curr == null, that means you didn't get val in the whole LL
        if(curr == null){
            System.out.println(val + "does not exist");
            return;
        }

        // if you want to delete the head node
        if(prev == null){ // head.val = val
            head = head.next;
        }
        else { //non head node
            prev.next = curr.next; //main linking step
            curr.next = null;
            curr = null;
        }
    }
}
