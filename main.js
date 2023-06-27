//============ Exercise #1 ============//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string_one, list_one){
    for (let i = 0; i < list_one.length; i++){
        if (string_one.toLowerCase().includes(list_one[i].toLowerCase())){
            console.log("Matched dog_name");
        } else {
            console.log("No Matches");
        }
    };
};
findWords(dog_string, dog_names);

//Call method here with parameters

//============ Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr_one){
    for (let i = 0; i < arr_one.length; i++){
        if (i % 2 === 0){
            arr_one.splice(i, 1, "even index");
        }
    };
    console.log(arr_one);
};
replaceEvens(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============ Code Wars #1 ============//
//Complete the method that takes a boolean value and 
//return a "Yes" string for true, or a "No" string for false.
function bool_to_word(boolean_one){
    if (boolean_one == true){
        console.log("Yes");
    } else if (boolean_one == false){
        console.log("No");
    };
};
bool_to_word(true);
bool_to_word(false);

//============ Code Wars #2 ============//
//Make a function that will return a greeting statement that uses an input;  
//your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    console.log(`Hello, ${name} how are you doing today?`)
};
greet('Jason');