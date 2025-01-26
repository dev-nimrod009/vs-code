import java.util.Scanner;

public class LargestNum{
    public static void main(String[] args) {
        int a,b,c;
        System.out.println("Enter three integers :");
        Scanner sct = new Scanner(System.in);
        a = sct.nextInt();
        b = sct.nextInt();
        c = sct.nextInt();
        sct.close();
        if (a > b && a > c){ // Condition check for largest number
            System.out.println("1st number is largest.");
        } else if (b > a && b > c) {
            System.out.println("2nd number is largest");
        }
        else {
            System.out.println("3rd number is the largest");
        }

    }
}