
import Employee from "./employee.js";

import {getCadre as cadre} from "./employee.js";
import {calculateTax as tax} from "./employee.js";
import {getBenefits as benefits} from "./employee.js";
import {calculateBonus as bonus} from "./employee.js";
import {reimbursementEligibility as reimbursement} from "./employee.js";

function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + cadre());
    console.log('Tax: ' + tax());
    console.log('Benefits: ' + benefits());
    console.log('Bonus: ' + bonus());
    console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
  }
  
  
  
  
  
  
  
  
  
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);