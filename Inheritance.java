/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.inheritance;

/**
 *
 * @author A
 */
public class Inheritance {

    public static void main(String[] args) {
        
   
 Inventory inventory =new Inventory();
         Item item1 = new Item("Apples" , 20);
         Item item2 = new Item("Sword",2);
    
         Fruit fruit = new Fruit( "melon" ,30 , "fuji");
          Weapon weapon = new Weapon( "sword" , 4 , 75,"maylay");
         inventory.addItem(item2);
         
   
    inventory.addItem("melon" ,30 , "fuji");
    inventory.addItem("sword",5, 75,"malee" );
    
   inventory.displayInventory();
  
    }
}
