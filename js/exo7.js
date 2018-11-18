/* === Exo7 ===
 *
 * Dans la fonction ci-dessous, le paramètre str est une chaîne de caractères.
 * Retourner l'extension de fichier contenue dans cette String.
 *
 * Par exemple :
 * - index.html : 'html'
 * - app.min.js : 'js'
 * - .eslintrc : 'eslintrc'
 * - truc : false
 */

function getExtension(str) {
   
   var ext = str.split('.');
  return !ext[1] ? false : ext.pop();
   
}





// Stop ! Tests, on ne touche pas :P
check.exo7(getExtension);
console.log(check.exo7);
