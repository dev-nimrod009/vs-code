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
public class Student extends Person {
String regNo;
String admissionYear;
int balance;
public Lecturer lecture;

public Student(){
}

Scanner scanner=new Scanner(System.in);
public String getRegNo(){
    return regNo;
}

public String getAdmissionYear(){
    return admissionYear;
}


public void setRegNo(String regno){
    this.regNo = regno;
}
public void setAdmissionYear(String admissionYear){
    this.admissionYear =admissionYear;
}

public void selfRegistration( ){
      System.out.print("Enter your name: ");
        setName(scanner.nextLine());

        System.out.print("Enter student age: ");
        setAge(scanner.nextInt());
        scanner.nextLine(); 
    
        System.out.println(" Which year were did you join? ");
        setAdmissionYear(scanner.nextLine());
        
         System.out.println("Welcome to Chuka University.\nHome away from home");
}

//methods = results,fess ,balance , register course
public void printResults(){
    System.out.println("The system is under maintenance.\n We shall be back to you later.");
    
}
public void payFees(){
    Scanner sc =new Scanner(System.in);
    
    System.out.println("Enter the amount you want to pay");
    sc.next();
}
public void  feeBalance(){
    System.out.print("Once the government diburses the Scholarship we "
            + "shall update your fee structure. \n Kindly bear with us");
}

public void  myDetails(){
      System.out.println(name);
         
        System.out.println("\nAge: "+age);
         
    
        System.out.println("\nJoined on "+admissionYear);
       
    //construct the details method
}
public void studentOption(){
    System.out.println("Enter an option \n1.Register Yourself \n 2. Pay Fees \n 3. Check Fees Balance \n 4.Print Results \n 5. My Details");
        String options = scanner.nextLine();
    switch (options) {
        case "1":
            selfRegistration();
            break;
            
        case "2":
            payFees();
            break;
        case "3":
            feeBalance();        
            break;
        case"4":
            printResults();        
            break;
                    
        case "5":
            myDetails();    
            break;
        default:
                    System.out.println("Please input a valid option");
            break;    
    }
    
}



}
