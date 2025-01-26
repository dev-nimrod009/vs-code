
import java.util.Scanner;





class Shapes{
    int base;
    int height;
   

   
        
       public double calculateArea(){
        double area =0.5*base*height;
        return area;
       };
        }
    
    class Circle{
        int radius;
        double pi = 3.142;
        
    public double findArea( ){
        double area2 = pi*radius*radius;
        
        return area2;
    }
    }

 public class Who{  
      public static void main(String[] args) {
         Scanner sct = new Scanner(System.in);
        Shapes s1=new Shapes();
       
        System.out.println("input your base ");
        s1.base=sct.nextInt();
        System.out.println("input your height");
        s1.height=sct.nextInt();

       
    

    double area = s1.calculateArea();
        System.out.println("the area is "+area);
    
    Circle a2 =new Circle();
    System.out.println("please enter the radius of the circle : ");
    a2.radius=sct.nextInt();

    double area2 = a2.findArea();
    System.out.println("the area is :"+area2);


     int a , d , c;
     System.out.println("enter two intergers a and d");
    
     a = sct.nextInt();
     d=sct.nextInt();
    
      c=a;
      a=d;
      d=c;
      System.out.println("your swapped numbers are  "+a+" and "+d);
 int i,j,k,l;
 System.out.println("enter four numbers");

 i=sct.nextInt();
 j=sct.nextInt();
 k=sct.nextInt();
 l=sct.nextInt();
 sct.close();

 if(i>j && i>k && i>l) {
 System.out.println(" the first number is the largest");
 }else if(j>k && j>l){
 System.out.println("the second number is the largest");

 }else if(k>l){
 System.out.println("the third number is the largest");
 }else{
 System.out.println("the fourth number is the largest");
 }

 

 }
 }

       
   

    

