package LinkedList;

public class DoublyLL {

    Node head;

    public void insertAtBegn(int val){
        Node node = new Node(val);
        node.next = head;
        node.prev = null;
        if(head != null){
            head.prev = node;
        }
        head = node;
    }

    public void printLinkedlist(){
        Node node = head;
        while(node != null){
            System.out.print(node.val + "--> ");
            node = node.next;
        }
    }

    private class Node {
        int val;
        Node prev;
        Node next;

        //constructor
        public Node(int val){
            this.val = val;
        }

        // another constructor
        public Node(int val, Node next, Node prev){
            this.val = val;
            this.next = next;
            this.prev = prev;
        }
    }
}
