/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let affirmatif = "oui"
let user = prompt("Voulez vous du gateau ?")
  if (user.toLowerCase() == affirmatif) {
  alert("Félicitations pour ton choix de gâteau ! (wtf?)");
  }else {
  alert("Mais enfin du gâteau, ça ne se refuse pas !")
}

})();