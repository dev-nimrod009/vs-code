 import java.util.Scanner;

 public class Example{

String word;

public Example(String word){
    this.word = word;
}
 public String reverse(){
StringBuilder  reversedName = new StringBuilder();
 
for (int i=word.length()-1;i>=0;i--){
reversedName.append(word.charAt(i));
}
return reversedName.toString();

 }
public boolean isPalindrome(){
    String  reverseName =reverse();
return word.equalsIgnoreCase(reverseName);

}

public static void main(String[] args) {
    Scanner sct =new Scanner(System.in);
     

     System.out.println("enter our word :");
     String word=sct.next();
     Example p2 = new Example(word);
     if(p2.isPalindrome()){
        System.out.println("this is an example of a palindrome");
     }else{
        System.out.println("this is not an example of a palindrome");
     }
     sct.close();
        }}































 




















