/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.amlearning.person;

/**
 *
 * @author A
 */
import java.util.*;
public class Programme {
String programmeName;
List<Course> course;
String  noOfYears;
  

public Programme(String programmeName, List<Course> course){
this.course = course;
this.programmeName = programmeName;
}
public String getProgrammeName(){
    return programmeName;    
}


public List<Course> getCourse(){
    return course;
}

 @Override
public String toString() {
        return programmeName + ": " + course;                                                 



}


//getName fee Structure


}
