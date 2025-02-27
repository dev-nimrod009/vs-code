/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.amlearning.calculator;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
/*
*
 *
 * @author A
 */
public  class Calculator extends JFrame implements ActionListener {
   private JTextField input, weka;
    private JLabel resultLabel;
    private JButton added;
    
    
    public Calculator(){
                  JFrame frakme =new JFrame("calc");
          frakme.setLayout(new FlowLayout());
        input = new JTextField(3);
        weka =new JTextField(3);
        resultLabel = new JLabel("answer");
       Button added = new Button("add");
        added.addActionListener(this);
     frakme.add(added);
//                JFrame frakme =new JFrame("calc");
//          frakme.setLayout(new FlowLayout());
        
        JLabel myNum = new JLabel("enter your first  number\n"); 
        frakme.add(myNum);
        
        JTextField input = new JTextField(3);
       frakme.add(input);
       
       
        JLabel other = new JLabel("enter your other  number\n"); 
        frakme.add(other);
        
        JTextField weka = new JTextField(3);
       frakme.add(weka);
       
       
//      Button added = new Button("add\n"); 
//        frakme.add(added);
//       
        
        JLabel resultLabel = new JLabel("answer\n" ); 
        frakme.add(resultLabel);
      
    frakme.setVisible(true);
    }
    
    public void actionPerfomed(ActionEvent e){
        if (e.getSource() == added){
            int a=Integer.parseInt(input.getText());
            int b =Integer.parseInt(weka.getText());
            int sum  = a + b;
            resultLabel.setText("result" +sum);
        }
    }
    public static void main(String[] args) {
//        JFrame frakme =new JFrame("calc");
//        frakme.setLayout(new FlowLayout());
//        
//        JLabel myNum = new JLabel("enter your first  number"); 
//        frakme.add(myNum);
//        
//        JTextField input = new JTextField(3);
//       frakme.add(input);
//       
//       
//        JLabel other = new JLabel("enter your other  number"); 
//        frakme.add(other);
//        
//        JTextField weka = new JTextField(3);
//       frakme.add(weka);
//        
        
       //  added.addActionListener(this);
       
     
  new Calculator();
        System.out.println("am done");
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}
