/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.inheritance;

/**
 *
 * @author A
 */
public class Fruit extends Item {
    
    private String type;
    
    /**
     *
     * @param name
     * @param quantity
     * @param type
     */
    public Fruit (  String name ,int quantity,String type  ){
        super(name ,quantity);
        this.type = type;
    }
    
}
