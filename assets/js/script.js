// TODO: Declare any global variables we need
let headsCount = 0
let tailsCount = 0
let flipcount = 0

let flip = document.querySelector('.buttonFlip')
flip.addEventListener('click', function (){
    flipsCount++
    console.log(flipsCount)
}

let clear = document.querySelector('.buttonClear')
clear.addEventListener('click', function(){
// need to finish clearing code.



}
document.addEventListener('DOMContentLoaded', function () {
   
    let isHeads = Math.random() <0.5
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})