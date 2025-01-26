/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.inheritance;

/**
 *
 * @author A
 */
import java.util.ArrayList;
public class Inventory {
    public ArrayList<Item>items;
    
    public Inventory(){
        items =new ArrayList<>();
        
    }
    public void addItem(Item item){
        items.add(item);
        System.out.println(item.toString());
                
    }
    public void displayInventory(){
       for (Item item : items){
           System.out.println(item.toString());
       } 
    }
   
    public void addItem(String name,int quantity,String type){
        items.add(new Fruit(name,quantity ,type));
    }

    /**
     *
     * @param name
     * @param quantity
     * @param damage
     * @param type
     */
    public void addItem(String name ,int quantity ,int damage ,String type ){
        items.add(new Weapon(name ,quantity,damage,type  ));
    }
}
