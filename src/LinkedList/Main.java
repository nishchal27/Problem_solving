package LinkedList;

import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        //input take
        Scanner sc = new Scanner(System.in);
        LinkedList l1 = new LinkedList();
        //I have an empty linked list li now.
        l1.insertAtEnd(3);
        l1.insertAtEnd(5);
        l1.insertAtEnd(8);
        l1.insertAtEnd(9);
        l1.insertAtBegn(1);
        l1.printLinkedlist();
    }
}
