/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */

function checkTime(test){
    if(test < 10){
       test = `0${test}`; 
       console.log(test) ; 
    }
    return test;
}
function DateHour() {
    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    var fmtMin = checkTime(min);
    var fmtSec = checkTime(sec);
    
    document.getElementById("container").innerHTML = hour + ":" + fmtMin + ":" + fmtSec;
    setTimeout(function(){ DateHour() }, 500);
    
}
    
