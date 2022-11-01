package LLImplimentation; 

public class LinkedList {
    Node head;

    // creating insert method
    public void insert(int data) {
        Node node = new Node();
        node.data = data;

        if (head == null) {
            head = node;
        } else {
            Node n = head; //traverse: using n to refer to the first node then
                          // move to next, next ... till null(last node)
            while (n.next != null) {
                n = n.next;
            }
            n.next = node; // insert new node to the end
        }
    }

    public void show(){
        Node node = head;
        while(node.next != null){
            System.out.println(node.data);
            node = node.next;
        }
        System.out.println(node.data);
    }
}
