/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */

 function Additionner(){
     const val1= +document.getElementById('firstVal').value;
     const val2= +document.getElementById('secondVal').value;
     const result = val1 + val2;
       return document.getElementById('result').innerHTML = result;
     
 }