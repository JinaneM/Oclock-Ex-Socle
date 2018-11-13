/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */

function formProcess(){
    var val = document.forms['input']['input1'].value + '<br/>';
    val += document.forms['input']['input2'].value + '<br/>';
    document.getElementById('result').innerHTML = result;
    
}

function Additionner(){
    var val1 = +document.getElementById('input1').value;
    var val2 = +document.getElementById('input2').value;
    const result = val1 + val2;
    console.log(result);
      return document.getElementById('result').innerHTML = result;
    
}