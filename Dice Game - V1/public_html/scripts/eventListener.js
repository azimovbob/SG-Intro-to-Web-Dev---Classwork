/* ANIMATION HANDLING */
let button = document.getElementById("button");
let newGame = document.getElementById("restartGame");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

//button listeners
button.addEventListener("click", anim);
//newGame.addEventListener("click", reload(true));

/** anim()
 * Rolling dice animation
 * @returns {void}
 */
function anim()
{
    //randomizer for dice rolls
    let num1 = Math.floor(Math.random() * 6 + 1);
    let num2 = Math.floor(Math.random() * 6 + 1);
    //catch user trials
    userRoll = num1 + num2;
    rollCount++;

    //main gameplay decision tree
    if (rollCount > userRollLimit)
    {
        //loss
        alert("You lose!!!");
        lossCount++;
        document.getElementById("newGameReload").style.display="block";
    } else if (userRoll === rollToWin)
    {
        //win
        alert("You win!!!");
        winCount++;
        document.getElementById("newGameReload").style.display="block";
    } else if (rollCount > 0 && rollCount < userRollLimit)
    {
        document.getElementById("keepRolling").style.display = "block";
    } else
    {

    }

    //debug
//    console.log(userRoll);
//    console.log(rollToWin);

    //display and animate
    //dice 1
    dice1.classList.add('animated', 'flipOutX', 'faster');
    document.querySelector(".dice1").src = `images/dice-${num1}.gif`;
    dice1.addEventListener('animationend', remAnim());
    //dice 2
    dice2.classList.add('animated', 'flipInX', 'faster');
    document.querySelector(".dice2").src = `images/dice-${num2}.gif`;
    dice2.addEventListener('animationend', remAnim());
}

/** remAnim()
 * Remove animation styles
 * @returns {void}
 */
function remAnim()
{
    dice1.classList.remove('animated', 'flipOutX', 'faster');
    dice2.classList.remove('animated', 'flipInX', 'faster');
}

/* GAMEPLAY FUNCTIONS AND VARS */
let gamePlay = false; //might not be needed...
let userRoll;
const userRollLimit = 10;
let rollCount = 0;
let winCount = 0;
let lossCount = 0;

//Display the player's goal
/** winningRoll()
 * Randomize the player goal
 * @returns {Number} 2-12 for 2 dice
 */
function winningRoll()
{
    let rollTo = Math.floor(Math.random() * 12 + 1);

    //2 Dice cannot reach a total of 1, set to 2
    if (rollTo === 1)
    {
        rollTo++;
    }

    return rollTo;
}

let rollToWin = winningRoll(); //how comp tracks the round goal for rolling
let win = document.getElementById("winningRoll");
win.innerText = rollToWin;


//display win/loss count --> HTML