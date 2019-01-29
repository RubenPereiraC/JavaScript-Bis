/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let performOperation = function(operation) {

        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);
        
        switch (operation) {

            case "addition":
                console.log(a + b);
            break;

            case "substraction":

                console.log(a - b);
            break;

            case "multiplication":

                console.log(a * b);
            break;

            case "division":

                console.log(a / b);
            break;

            default:
                console.log("Avez vous entrer deux valeurs ?");

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
