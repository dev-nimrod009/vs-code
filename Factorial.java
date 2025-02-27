/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.amlearning.factorial;

/**
 *
 * @author A
 */
public class Factorial {

    public static void main(String[] args) {
        int p, factorial=1, number=10;
                
        for( p=1;p<=number;p++){
       System.out.println("the factorial of "+number+" is "+factorial);
            factorial=factorial*p;
        }
        System.out.println("the factorial of "+number+" is "+factorial);
        System.out.println("WELL DONE YOU DESERVE SOME TEA!");
    }
}
