/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */

/**
 *
 * @author A
 */
import java.util.Date;
public class Patco{
 
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        
        // TODO code application logic here
       int x=3;
        if (x>=5){
        System.out.println("am greater");
        }else{
            System.out.println("am less");
        }
      
       for(int i=0;i<5; i++)      {   
           System.out.println("ruto must go");
       }
     int i=0;
     while( i<5){
         System.out.println("we shall make it");
    i++; 
    
    }
    
    switch(x){
        case 30:System.out.println("A");
        break;
        case 20:System.out.println("so it is 20");
        break;
        default:System.out.println("am none");
    }
 Date Patco=new Date();
  System.out.println(Patco);
}
}