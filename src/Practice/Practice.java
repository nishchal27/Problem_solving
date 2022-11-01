package Practice;

import java.util.Scanner;

public class Practice {

    static class Node {
        int data;
        Node next;

        Node(int data, Node next) {
            this.data = data;
            this.next = next;
        }
    }

    // returns the new tail of the LL
    static Node addNode(Node tail, int data) {
        Node newNode = new Node(data, null);
        tail.next = newNode;
        return newNode;
    }

    static Node reverse(Node head) {
        Node previous = null;
        Node current = head;
        Node next = null;

        while (current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        return previous;
    }

    static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node head = new Node(-1, null);
        Node tail = head;

        while (n > 0) {
            int data = n % 10;
            tail = addNode(tail, data);
            n = n / 10;
        }
        head = head.next;

        int carry = 1;
        int sum = 0;
        Node p = head;

        while (p != null) {
            sum = carry + p.data;
            p.data = sum % 10;
            carry = sum / 10;
            p = p.next;
        }

        if (carry == 1) {
            tail = addNode(tail, 1);

            head = reverse(head);
            printList(head);
        }
    }
}
