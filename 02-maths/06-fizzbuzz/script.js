/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //multiples de 3 fizz
    //mult de 5 buzz
    //mult de 3 et 5 : fizbuzz
    let res = [];
        function fizzTest() {


                for (let count =1;count<=100;count++){

                    if (count%3 == 0 && count%5 == 0) {
                        console.log("FizzBuzz");
                    } else if (count%3 == 0) {
                        console.log("Fizz");
                    } else if (count%5 == 0){
                        console.log("Buzz");
                    } else {
                        console.log(count);
                    }
                    
                    
                };
            
        };

fizzTest();

})();
