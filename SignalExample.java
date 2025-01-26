import java.util.concurrent.Semaphore;

class Kitchen {
    private final Semaphore cookingStations = new Semaphore(2); // Two cooking stations
    private boolean mealReady = false; // Indicates if a meal is ready

    public synchronized void prepareMeal(String chefName) throws InterruptedException {
        cookingStations.acquire(); // Acquire a cooking station
        System.out.println(chefName + " is preparing the meal...");
        Thread.sleep(2000); // Simulate time taken to prepare the meal
        mealReady = true; // Meal is ready
        System.out.println(chefName + " has prepared the meal.");
        notify(); // Notify the waiter that the meal is ready
        cookingStations.release(); // Release the cooking station
    }

    public synchronized void serveMeal(String waiterName) throws InterruptedException {
        while (!mealReady) {
            wait(); // Wait until the meal is ready
        }
        System.out.println(waiterName + " is serving the meal.");
        mealReady = false; // Reset the meal status
    }
}

public class SignalExample {
    public static void main(String[] args) {
        Kitchen kitchen = new Kitchen();

        // Chef thread
        Thread chef1 = new Thread(() -> {
            try {
                kitchen.prepareMeal("Chef 1");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        // Waiter thread
        Thread waiter1 = new Thread(() -> {
            try {
                kitchen.serveMeal("Waiter 1");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        // Chef thread
        Thread chef2 = new Thread(() -> {
            try {
                kitchen.prepareMeal("Chef 2");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        // Start the threads
        chef1.start();
        waiter1.start();
        chef2.start();
    }
}