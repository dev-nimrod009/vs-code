package com.mycompany.motorbike;

public class Motorbike {

    public static void main(String[] args) {
        
    Fan fan = new Fan("manufacturer1",0.12235,"green");
    fan.switchOn();
    fan.setSpeed((byte)8);
     System.out.println(fan);
    fan.switchOff();
      
    System.out.println(fan);
    }
     
}
