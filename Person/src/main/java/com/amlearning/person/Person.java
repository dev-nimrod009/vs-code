/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.amlearning.person;

/**
 *
 * @author A
 */
import java.util.Scanner;
public class Person {
String name;
int age;
String DOB;


public Person( ){
     
    
}
public String getName(){
    return name;
}
public int getAge(){
    return age;
}
public void setName(String name){
    this.name =name;
}
public void setAge(int age){
    this.age=age;
}

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
         Student s1 =new Student();
         Lecturer l1 =new Lecturer();
         
         System.out.println("Are you a \n1.Student \n 2. Lecturer  ");
        String choose = scanner.nextLine();
    switch (choose) {
        case "1":
            s1.studentOption();
            break;
            
        case "2":
            l1.lecturerOption();
            break;
        default:
            System.out.println("Kindly input a valid option");
        break;
    }
    
    }
}
