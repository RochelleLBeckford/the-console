//& JavaScript on the Browser
/*
& Developer tools
~ It was originally a browser-based language meant for making websites interactive
~ Most browsers you can use the developer tools for running JavaScript code

& Accessing the Console
~ A browser's developer tools will usually have a "Console" section where you can type and run lines of JavaScript code

& Safari
~ short cut to open inspect tool
~ opt + cmd + i

~ shortcut to open console
~ opt + cmd + c

~ The JavaScript code is typed near the bottom and run by pressing the "enter" key
*/

/*
& Performing Evaluations
~ it is a common thing in the JavaScript console to perform simple evaluations like arithmetic or atring concatenation
*/
// ~ Arithmetic
console.log(42 * 3);
// ~ Concatenation
console.log("Humans" + " " + "Rock!");

//& Using Variables
//~ Rather than perform evaluations directly, the results can be stored in a variable
let followers = 1000000;
console.log(followers);

//~ variables can be created with var, let, or const keywords (or no keyword at all) and use them on a future line of JS in the console

/*
& Running Functions
~ functions can be created in the console as well
~ when using function syntax the console will allow for a function boudy to span multiple lines:
*/
function greetings() {
    return "Hello, World!";
}
console.log(greetings());

/*
& Manipulating the DOM
~ The elements of a website (represented by the document object model or DOM) on th browser console
~ this can be done with the document object
~ use the methods of this object to select, view, and even change the contents of elements
~ These are some methods:
    ~ querySelector(): Pass a string of the element you'd like to select, either by name, 'class', or 'id'
    ~ innerText: A string of an element's text content
*/
document.querySelector()
//~ document. is followed by A list of available methods and properties
//~ can either select something from the list or type something for autosuggestions

