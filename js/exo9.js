/* === Exo9 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la somme des nombres contenus dans cet Array.
 *
 * Par exemple :
 * - [1, 2, 3] : 6
 * - ['un', 2, 'trois', 4, 'cinq'] : 6
 * - [] : 0
 * - [1, [2, 3, [4, 5], 6], 7, [8, 9]] : 45
 */


function sum(arr) {

    if (arr.length <= 0) {
        return 0
    }
    return retriveElement(arr);
}


function retriveElement(arr, result = 0) {
    console.log(arr, result);
    arr.forEach(element => {
        if (typeof element === 'number') {
           result = result + element;
        }
        //Méthode Récursive
        if (Array.isArray(element)) {
            result = retriveElement(element,result);

        }
    });

    return result;
 }




// Stop ! Tests, on ne touche pas :P
check.exo9(sum);
console.log(check.exo9);
