
/* Multiplication Quiz 
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */
main();

function main() {
    let score = askFive();
    if (score == 0) alert("Perfect!");
    else alert("You had "+score+" errors");
}

/* askFive calls askQuestion five times, counting and returning number wrong
 * @param: none
 * @return: score (0-5)
 */
function askFive() {
    let wrong = 0;
    for (let question = 1; question <= 5; question++) {
        wrong += askQuestion(question);
    }
    return wrong;
}

/* askQuestion asks a multiplication question, returns 1 if incorrect
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function askQuestion(question){
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let product = a*b;
    let equation = a + " * " + b + " = ?";
    let answer = prompt(equation);
    if (answer == "q"){
        alert("Quitter!");
        return 2;
    }
    else if (answer == product){
       alert("Correct!");
       return 0;
    } 
    else {
        alert("incorrect");
        return 1;   
    } 
}
