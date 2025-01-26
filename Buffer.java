// Java program to demonstrate bufferedReader
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class buffer{
    public static void main(String[] args) throws IOException{
        //Enter data using BufferedReader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        // Reading data using readline
        String name = reader.readLine();
        // Printing the read line
        System.out.println(name);
    }
}