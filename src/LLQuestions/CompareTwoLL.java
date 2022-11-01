// COMPARE TWO LINKED LISTS
package LLQuestions;
import java.util.Scanner;

public class CompareTwoLL {
    static class Node {
        int data;
        Node next;

        Node(int data, Node Next) {
            this.data = data;
            this.next = next;
        }
    }

    static Node addNode(Node tail, int data) {
        Node newNode = new Node(data, null); //create a new node
        tail.next = newNode; //point this tail from current node to-> new node
        return newNode; // returns the new tail of the LL
    }

    public static void main(String[] args) {
        // code for taking input start
        Scanner sc = new Scanner(System.in);

        int m = sc.nextInt();// length of first LL
        int n = sc.nextInt();// length of second LL

        Node headA, headB;
        Node tailA, tailB;

        headA = new Node(0, null);// 0 is temperoray data
        headB = new Node(0, null);// 0 is temperoray data
        tailA = headA;
        tailB = headB;

        // take first LL input
        for (int i = 1; i <=m; i++) {
            int data = sc.nextInt();
            tailA = addNode(tailA, data); //shifting ->; now it will point to (addNode)'s returned new node
        }

        // take second LL input
        for (int i = 1; i <=n; i++) {
            int data = sc.nextInt();
            tailB = addNode(tailB, data); //shifting ->; now it will point to new node
        }
        // code for taking input end.

        headA = headA.next; //now it's pointing to actual head instead of temporary data(0)
        headB = headB.next; //now it's pointing to actual head instead of temporary data(0)

        
        boolean isSame = true;
        if(m!=n) //both LL are of not equal length
        {
            isSame = false;
        }else{
            Node pA = headA, pB = headB;
            while(pA != null && pB != null){
                if(pA.data != pB.data) //data in respective nodes are not equal
                {
                    isSame = false;
                    break;
                }else //if equal
                {
                    pA = pA.next;
                    pB = pB.next;
                }
            }
        }
        if(isSame == true)// both LL are same
        {
            System.out.println(1);
        }else{
            System.out.println(0);
        }
    }
}
