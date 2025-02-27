/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.amlearning.palindromeofdigits;

/**
 *
 * @author A
 */
public class PalindromeOfDigits {

    public static void main(String[] args) {
        int n=0 ,reverse ,number=4567;
        reverse=number;
        while(number>0){
            System.out.println("the number is "+number);
           int m=number%10;
            n=(n*10)+m;
            number=number/10;
        }
        if(n==reverse){
            System.out.println(reverse+" is a palindrome");
        }else{
            System.out.println(reverse+" is not a palindrome");
        }
        
        
        System.out.println("GREAT JOB NINJA!");
    }
}
