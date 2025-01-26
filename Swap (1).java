import java.util.Scanner;

public class Swap{
    public static void main(String[]args)
    {
        int z,y,temp;
        System.out.println("Enter z and y");
        Scanner sct = new Scanner(System.in);
        z = sct.nextInt();
        y = sct.nextInt();
        System.out.println("Before Swapping\nz = "+z+"\ny = "+y);
        temp = z;
        z=y;
        y= temp;
        System.out.println("After Swapping\nz = "+z+"\ny ="+y);
    }


}
// 3,0,5,-1,9