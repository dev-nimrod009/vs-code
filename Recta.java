/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.rectanglee;

/**
 *
 * @author A
 */
public class Recta {
    //state
    private int length;
    private int width;
    
    public Recta(int length,int width){
        this.length=length;
        this.width=width;
    }
    //operations
    public void setLength(int length){
        this.length=length;
    }
    public int getLength(){
        return length;
    }
    public void setWidth(int width){
        this.width=width;
    }
    public int getWidth(){
        return width;
    }
    public int area(){
        return length*width;
    }
    public int perimeter(){
        return 2*(length + width);
    }
    public String toString(){
        return String.format("length-%d,width-%d,area-%d,perimeter-%d ",
                length,width,area(),perimeter());
    }
}
