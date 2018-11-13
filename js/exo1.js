/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */


 function Additionner(){
    var val1 = +prompt('Enter first number','chaîne par défaut');
    var val2 = +prompt('Enter second number','chaîne par défaut');
    const result = val1 + val2;
    document.getElementById('result').innerHTML = result;   
 }
 Additionner();