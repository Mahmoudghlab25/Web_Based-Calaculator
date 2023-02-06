package com.example.lab2.calculator;

import org.springframework.stereotype.Service;

@Service
public class Lab2CalculatorService {

    public String output;
    public String handle(String op,String prev, String curr)
    {
        //inp=inp.trim();
        //String in[] = inp.split(" ");
        double res=0;
        switch (op){
            case "+":
                res=Double.parseDouble(prev)+Double.parseDouble(curr);
                break;
            case "-":
                res=Double.parseDouble(prev)-Double.parseDouble(curr);
                break;
            case "×":
                res=Double.parseDouble(prev)*Double.parseDouble(curr);
                break;
            case "div":
            {
                if(curr.equals("0"))
                {
                    return null;
                }
                res=Double.parseDouble(prev)/Double.parseDouble(curr);
                break;
            }
            case "frac":
            {
                if(Double.parseDouble(curr)==0)
                {
                    return null;
                }
                else
                {
                    res=(double) 1.0/Double.parseDouble(curr);
                }
                break;
            }
            case "sqr":
            {
                res=Double.parseDouble(curr)*Double.parseDouble(curr);
                break;
            }
            case "sqrt":
            {
                if(Double.parseDouble(curr)<0)
                    return null;
                res=Math.sqrt(Double.parseDouble(curr));
                break;
            }
            case "per":
            {
                res=(Double.parseDouble(curr)/100.0)*Double.parseDouble(prev);
                break;
            }
        }
        output=String.valueOf(res);
        return output;
    }
}

