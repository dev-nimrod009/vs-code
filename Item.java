/*
Templates/Licenses/license-default.txt to change this licens* Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.inheritance;

/**
 *
 * @author A
 */
public class Item {
    private String name;
    private int quantity;
    
    public Item(String name ,int quantity){
        this.name=name;
        this.quantity =quantity;
    }
    
    public String getName(){
        return name;
    
    }
    public int getQuantity(){
        return quantity;
    }
    @Override
    public String toString(){
        return "Item : "+ name +",Quantity : "+ quantity;
    }}
    
