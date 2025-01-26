/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.inheritance;

/**
 *
 * @author A
 */
public class Weapon extends Item {
    private String type;
    private int damage;
    
    public Weapon(String name   ,int quantity,int damage , String type  ) {
       super (name ,quantity);
       
       this.damage= damage;
               this.type = type;
    }
 public int getDamage(){
     return damage;
 }
 public String getType(){
     return type;
 }
    @Override
    public String toString(){
        return  "weapon :" +getName()+  "Quantity :"+ getQuantity()+ " ,damage :"+getDamage() + " , Type "+getType() ; 
    }
}
