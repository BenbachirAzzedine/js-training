'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string) {
    let array = string.split(" ");

    for (let i = 0; i < array.length; i++) {
        let word = array[i].split("");
        word[0] = word[0].toUpperCase();
        array[i] = word.join("");
    }
    return array.join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("Je mange des frites"), "Je Mange Des Frites")
    //assert.fail('You must write your own tests')
    // End of tests */