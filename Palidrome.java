import java.util.Scanner;
//import java.lang.foreign.SymbolLookup;

public class Palidrome {
    private String name;



    public Palidrome(String name) {
        this.name = name;
    }



    public String reverse(){
        StringBuilder reversedName =new StringBuilder();
        
        for (int i = name.length()-1; i>=0; i--){
            reversedName.append(name.charAt(i));
        }
       return reversedName.toString();
    }



    public boolean isPalidrome(){
        
String reversedName = reverse();
        return name.equalsIgnoreCase(reversedName);
    }



    public static void main(String[] args) {
        Scanner sct = new Scanner(System.in);

        System.out.println("Enter a name");
        String name = sct.next();
            
        Palidrome p1 = new Palidrome(name);
        if(p1.isPalidrome()){
            System.out.println(name + " is a palidrome");

        }
            else{
            System.out.println(name + " is not a palidrome");
        }

       

       
     
sct.close();
    }}
