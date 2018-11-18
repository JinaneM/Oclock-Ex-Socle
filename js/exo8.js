/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */

function getLongestString(arr) {
 
    if(arr.length > 0){
        arr.sort( function(a,b){
            return String(b).length -String(a).length;

         })

        return arr[0];
       
    }
    if(arr.length === 0){
        return false;
    }      
      
}



// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
console.log(check.exo8);
