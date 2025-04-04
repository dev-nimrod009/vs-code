/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.amlearning.person;

/**
 *
 * @author A
 */
public class Course {
    String courseName;
    String courseCode;
    
    public Course(String courseName,String courseCode){
    this.courseName=courseName;
    this.courseCode= courseCode;
    
    }
    
    public String getCourseName(){
        return courseName;
    }
    public String getCourseCode(){
        return courseCode;
    }
    public void setCourseName(String courseName){
        this.courseName = courseName;
    }
    public void setCourseCode(String courseCode){
       this.courseCode = courseCode;
    }
    
     @Override
    public String toString() {
        return courseName + " (" + courseCode + ")";
    }
    
    
}
