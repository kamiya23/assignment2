/* //STEP 1
var name = window.prompt("Enter Your Name :");
window.alert(name.length);
*/

/* //STEP 2
var name = window.prompt("Enter Your Name :");
var num = window.prompt("Enter a number :");
window.alert(name.charAt(num));
*/

/*//STEP 3
var firstName = window.prompt("Enter Your First Name :");
var lastName = window.prompt("Enter Your Last Name :");
window.alert('Your name is ' + firstName + " " + lastName);
*/


/*//STEP 4
var strp = 'The quick brown fox jumps over the lazy dog';
window.alert(strp.indexOf("fox"));
*/


/* //STEP 5
var strp = 'The quick brown fox jumps over the lazy dog';
window.alert(strp.lastIndexOf("fox"));
*/

/* //STEP 6
var strp = 'The quick brown fox jumps over the lazy dog';
var name = window.prompt("Enter your full name : ");
window.alert(strp.replace("the lazy dog", name));
*/


 /* //STEP 7
var strp = 'The quick brown fox jumps over the lazy dog';
var word = window.prompt("Enter a word : ");
var msg = strp.search(word);
window.alert('"' + word + '"' + " Word is in the string on " + msg + " position");
*/


/* //STEP 8
var old_string = 'The quick brown fox jumps over the lazy dog';
var new_string = (old_string.slice(30, 43));
window.alert(new_string.toLocaleUpperCase());
*/


/* //STEP 9
var old_string = '           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG           ';
var strp = (old_string.trim());
window.alert(strp.toLocaleLowerCase());
*/


/*//STEP 10
var old_string = 'the quick brown fox jumps over the lazy dog';
var temp = old_string.charCodeAt(0); //get ascii value of first char of string.
temp = temp - 32;   // convert to capital value
var char1 = String.fromCharCode(temp); // change to ascii value to char
window.alert(char1 + old_string.slice(1, old_string.length)); // display full string.  If you change the string it will work.

*/





