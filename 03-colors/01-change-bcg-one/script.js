/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let r = document.getElementById("red").addEventListener('click',function(){
        document.getElementById("red").style.backgroundColor = "red";
        document.bgColor = "red";
    });
    let g = document.getElementById("green").addEventListener('click',function(){
        document.getElementById("green").style.backgroundColor = "green";
        document.bgColor = "green";
    });
    let y = document.getElementById("yellow").addEventListener('click',function(){
        document.getElementById("yellow").style.backgroundColor = "yellow";
        document.bgColor = "yellow";
    });
    let b = document.getElementById("blue").addEventListener('click',function(){
        document.getElementById("blue").style.backgroundColor = "blue";
        document.bgColor = "blue";
    });

    

})();
