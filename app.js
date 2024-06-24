function calc() {
   
    let number01 = new Number(document.getElementById("number01").value);
    let number02 = new Number(document.getElementById("number02").value);
    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("lblOutput");

    
   
    let result;
    switch(op) {
        case "+":
            result = number01 + number02;
            break;
        case "-":
            result = number01 - number02;
            break;
        case "*":
            result = number01 * number02;
            break;
        case "/":
            if (number02 === 0) {
                lblOutput.innerHTML = "Cannot divide by zero.";
                return;
            }
            result = number01 / number02;
            break;
        default:
            lblOutput.innerHTML = "Please enter a valid operator (+, -, *, /).";
            return;
    }

   
    lblOutput.innerHTML = "Result: " + result;

  
    console.log("Number 01: " + number01);
    console.log("Number 02: " + number02);
    console.log("Operator: " + op);
    console.log("Result: " + result);
}
