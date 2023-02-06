package com.example.lab2.calculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Lab2CalculatorController {
    @PostMapping(value = "/operate/{oper}/{prev}/{curr}")
    public String calc(@PathVariable("oper") String operator, @PathVariable("prev") String prev_op, @PathVariable("curr") String curr_op) {
        Lab2CalculatorService calculator = new Lab2CalculatorService();
        return calculator.handle(operator, prev_op, curr_op);
    }
}