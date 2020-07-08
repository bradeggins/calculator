// Declare global variables for elements
var valuesToCalculate = []
var total = 0
var keyedValue = ""
// Listen
    // Add event listener to get button value
    var buttonPress = document.addEventListener('click', calculate)
// Get button value
    // From event listener
    function calculate(){
        console.log(event)
        var pressedValue = event.target.value;
        // If AC then call allClear
        if(pressedValue === "AC"){
            allClear();
        // If CE then call clear
        } else if (pressedValue === "CE"){
            clearEntry();
        // If = then replace display with running total 
        } else if (pressedValue === "="){
            calculateTotal()
            displayTotal()

        } 
    }
    
    
    // If = then replace display with running total
    // If */+- then calculate 
    // Else store number

// Clear everything and reset calc 
function allClear(){
    //Erase current stored number
    console.log("AC")
    keyedValue = ""
    // Erase global array
    valuesToCalculate = []
    //Set values to zero
    total = 0
}
// Clear last inputed value
function clearEntry(){
    console.log("CE")
    // Erase current stored number
    keyedValue = ""  
    // Set display to 0
    total = 0
}
    

    

// Store number
    // If button press is a number then store in temp string
    // When another button pressed +-*/ store in array
    
// Calculate
    // Loop throug array and calculate using each item
function calculateTotal(){
    
}

// Display total on LCD screen
function displayTotal(){
    var display = document.getElementById("display")
    display.value = total;
}




