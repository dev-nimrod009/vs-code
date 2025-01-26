import java.util.Calendar;
import java.util.GregorianCalendar;

public class DateTime{
    public static void main(String[] args) {
        int day, month, year;
        int second, minute, hour;
        GregorianCalendar date = new GregorianCalendar(); //Creating Date object
        day = date.get(Calendar.DAY_OF_MONTH); // Storing day of the month
        month = date.get(Calendar.MONTH); // Storing the month
        year = date.get(Calendar.YEAR); //Store the current month
        second = date.get(Calendar.SECOND);
        minute = date.get(Calendar.MINUTE);
        hour = date.get(Calendar.HOUR);
        System.out.print("Current date is "+day+"/"+(month+1)+"/"+year);
        System.out.println("Current time is "+hour+":"+minute+":"+second);


    }
}