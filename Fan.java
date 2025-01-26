/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.motorbike;

/**
 *
 * @author A
 */
public class Fan {
    
    // state of the object
    private String make;
    private double radius;
    private String color;
    private boolean isOn;
    private byte speed;
    
    public Fan(String make, double radius,String color){
        this.make = make;
        this.radius=radius;
        this.color=color;
    }
    public String toString(){
      return String.format("make - %s , radius - %f,color - %s ,isOn- %b,speed-%d",
            make,radius,color,isOn,speed);
    }
    
    //isOn
    public void isOn(boolean isOn){
        this.isOn =isOn;
    }
    public void switchOn(){
        this.isOn=true;
        setSpeed((byte)5);
    }
      public void switchOff(){
        this.isOn=false;
        setSpeed((byte)0);
    }
      public void setSpeed(byte speed){
          this.speed= speed;
      }
    
}
