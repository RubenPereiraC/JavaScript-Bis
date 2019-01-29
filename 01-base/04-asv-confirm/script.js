/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function questions () {
        
        let age, genre, ville, result;

        age = prompt("Quel âge avez vous ?");
        genre = prompt("Êtes vous un homme ou une femme ?");
        ville = prompt("Dans quelle ville vivez-vous ?");

        result = confirm("Confirmez-vous que vous avez " + age + "ans," + "Vous êtes un(e) " + genre + "," + "Et vous habitez à " + ville + "?");
        
        if (result == true) {
            alert("Votre formulaire est compléter");
       } else {
           alert("Veuilles entrer vos données à nouveau :")
           questions();
       }
   
    }

    questions();


})();
