import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.Scanner;
import javax.swing.JOptionPane;



public class BankAccount{ 
    private double balance;
    private Scanner sct=new Scanner(System.in);
    private static String currentTime=getCurrentTimeInAmPm();
    private static String currentDate=getCurrentDate();
    private static String mpesaCode=mpesaCodeGenerator();
   
    
    public BankAccount(double initialBalance){
        this.balance=initialBalance;
    }
    private static String getCurrentDate(){
        Date now=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd");
        return sdf.format(now);
        
    }
    private static String getCurrentTimeInAmPm(){
    Date now=new Date();
    SimpleDateFormat sdf=new SimpleDateFormat("hh:mm:ss a");
    return sdf.format(now);
    }
        
    private static String mpesaCodeGenerator() {
             
                Random random = new Random();
                int length = 10; // Adjust the length as needed
                StringBuilder code = new StringBuilder();
        
                for (int i = 0; i < length; i++) {
                    // Generate a random number: 0 for digit, 1 for uppercase letter
                    int choice = random.nextInt(2);
        
                    if (choice == 0) {
                        // Generate a random digit (0-9)
                        int digit = random.nextInt(10);
                        code.append(digit);
                    } else {
                        // Generate a random uppercase letter (A-Z)
                        char letter = (char) (random.nextInt(26) + 'A');
                        code.append(letter);
                    }
                }
                String mpesaCode = code.toString();
                return mpesaCode;

            }
    

    public void deposit(){
            
        double moneyIn;
        //get the amount to be deposited
        System.out.println("how much do you want to deposit ");
        moneyIn=sct.nextDouble();
         // Update the balance
        balance += moneyIn;
        JOptionPane.showMessageDialog(null,mpesaCode+" Dear customer, Your transaction of"+ moneyIn + " has successfully been deposited to your account on " + currentDate + " at " + currentTime + ".New account balance is kes" + balance);
    }


    



    public void withdraw(){
          

        double moneyOut;
        //get the amount to be withdrawn
        System.out.println("how much do you want to withdraw ");
        moneyOut=sct.nextDouble();
        if(balance>=moneyOut){
            balance -= moneyOut; 
            
            System.out.println(mpesaCode +" Confirmed on " + currentDate + " at " + currentTime + " withdrawal of ksh" + moneyOut  + "from your bank account. New account balance is Kes"   + balance + ". Amount you can transact within a day is Kes500,000"); 
            // Update the balance
           
        }else{
            System.out.println("Insufficient funds in your account to withdraw the amount");
        } 
    }

    public static void main(String[] args) {
       
 BankAccount account=new BankAccount(1000);
      
//give the user 2 options
        System.out.println("select an option");
        System.out.println("1.depost some money");
        System.out.println("2.withdraw cash");
         int option=account.sct.nextInt();
         switch(option){
            case 1:
           account.deposit();
            break;
         
         case 2:
         account.withdraw();
         break;

         default:
         System.out.println("invalid choice.Please enter a valid choice");
         }
    
               account.sct.close();
    }
}
what are the advamta-[-]