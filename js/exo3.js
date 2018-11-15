/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input.
 * 2. Chaque fois qu'on tape au clavier dans l'un des deux inputs,
 *      et si les deux inputs sont remplis,
 *      on additionne les deux nombres.
 * 3. On affiche le résultat dans #result
 */

 function additionner(){
     var val1 = +document.getElementById('input1').value;
     var val2 = +document.getElementById('input2').value;
     if(val1 && val2){
     const result = val1 +  val2;
     console.log('ça passe');
    //  return result;
    document.getElementById('result').innerHTML = result;
     }


 }
// var result = document.getElementById('result');
// result.addEventListener("input", additionner);