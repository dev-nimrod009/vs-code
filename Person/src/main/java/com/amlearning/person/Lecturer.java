/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.amlearning.person;

/**
 *
 * @author A
 */
import java.util.Scanner;
public class Lecturer extends Person {
String staffNo;

public Lecturer( ){ }
public String getStaffNo(){
    return staffNo;
}
public void setStaffNo(String staffNo){
    this.staffNo =staffNo;
}

public void printCourseResult(){
    System.out.println("Option unavailable!!. ");
    System.out.println("Please visit the system admin to get assistance.");
}
 public void keyMarks(){
     System.out.println("This option will only be available when the exams are over.");
 }
Scanner scanner = new Scanner(System.in);
public void lecturersDetail(){
 System.out.print("Enter your name: ");
        setName(scanner.nextLine());

        System.out.println("Enter your age: ");
        scanner.nextLine();

} 
public void lectur(){
    System.out.println("Your have been assigned to teach JAVA II" );
}
//key marks , print results

public void printLecturerDetail(){
    System.out.println(name.toUpperCase());
    System.out.println("\n");
    System.out.println("STAFF NUMBER: "+staffNo.toUpperCase());
    System.out.println("\n");
    lectur();
}

public void lecturerOption(){
    System.out.println("Enter an option \n1.Register Yourself \n 2. Key in Marks \n 3. Print Course Result \n 4. My Details");
        String options = scanner.nextLine();
    switch (options) {
        case "1":
            lecturersDetail();
            break;
            
        case "2":
            keyMarks();
            break;
        case "3":
            printCourseResult();        
            break;
        case"4":
            
            printLecturerDetail();    
            break;
        default:
            System.out.println("Please input a valid option");
            break;    
    }
}





}