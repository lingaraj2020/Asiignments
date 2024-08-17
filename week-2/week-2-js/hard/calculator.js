/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  add(num){
    this.result+=num;
  }
  subtract(num){
    this.result-=num;
  }
  multiply(num){
    this.result*=num;
  }
  divide(num){
    if(typeof num!='number'){
      throw new Error("invalid number")
    }
    if(num===0){
      throw new Error('can not divide by zero');
      
    }
    this.result/=num;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }

  calculate(exp){
    exp=exp.replace(/\s+/g,'');
    if (!this.isValidExpression(exp)) {
      throw new Error('Invalid expression');
    }

    try {
      // Ensure division by zero is handled
      if (this.containsDivisionByZero(exp)) {
        throw new Error('Division by zero');
      }

      // Evaluate the expression
      this.result = this.evaluateExpression(exp);
    } catch (error) {
      throw new Error('Error in expression evaluation');
    }
  }

  isValidExpression(exp) {
    const valid = /^[0-9+\-*/().]+$/;
    if (!valid.test(exp)) {
      return false;
    }
    return true;
  }

  containsDivisionByZero(exp) {
    const zeroDivisionPattern = /\/\s*0(?![.\d])/;
    return zeroDivisionPattern.test(exp);
  }

  evaluateExpression(exp) {
    // Use Function constructor for safe evaluation
    const parse = new Function('return ' + exp);
    return parse();
  }
}



module.exports = Calculator;
