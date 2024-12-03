/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded?:
// When do they need to be reset or updated?

var fullDayPrice = 35;  // cost per full day
var halfDayPrice = 20;  // cost per half day
var numberOfDays = 0;   // number of days selected
var totalCost = 0;      // total cost of booking

// Elements on the screen that will be clicked or will need to be modified:

var dayButtons = document.getElementsByTagName('li');         // list of all day buttons
var fullDayButton = document.getElementById('full');                    // "full" day button
var halfDayButton = document.getElementById('half');                    // "half" day button
var clearButton = document.getElementById('clear-button');              // "clear days" button
var calculatedCost = document.getElementById('calculated-cost'); // element displaying the calculated cost
var clickedClass = 'clicked';                                           // name of the class that will be added to "clicked" elements


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


for (var index = 0; index < dayButtons.length; index++) {
    var currentButton = dayButtons[index];
    currentButton.addEventListener('click', changeColorDay);
  }
        
function changeColorDay() {
      // check if button is already clicked
    if (!this.classList.contains(clickedClass)) {
        // add clicked class to button
        this.classList.add(clickedClass);
        // increment day counter
        numberOfDays++;
      }
      // recalculate total cost
      calculateTotalCost();
    }
  
  
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// get the clear button
function deleteAll() {
    for (var index = 0; index < dayButtons.length; index++) {
      var button = dayButtons[index];
      button.classList.remove(clickedClass);
    }
    halfDayButton.classList.remove(clickedClass);
    fullDayButton.classList.add(clickedClass);
    numberOfDays = 0;
    totalCost = 0;
    calculatedCost.textContent = '0';
  }
  
  clearButton.addEventListener('click', deleteAll);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// add event listener to the half-day button
function halfDayButtonClick() {
        // add the "clicked" class to the "half" element
    halfDayButton.classList.add(clickedClass);
    
    // remove the "clicked" class from the "full" element
    fullDayButton.classList.remove(clickedClass);
    
    // recalculate the total cost
    calculateTotalCost();
  }
  
  halfDayButton.addEventListener('click', halfDayButtonClick);




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// add event listener to the full-day button
function fullDayButtonClick() {
    // add the "clicked" class to the "full" element
    fullDayButton.classList.add(clickedClass);
    
    // remove the "clicked" class from the "half" element
    halfDayButton.classList.remove(clickedClass);
    
    // recalculate the total cost
    calculateTotalCost();
  }
  
  fullDayButton.addEventListener('click', fullDayButtonClick);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    // calculate total cost based on day counter and other variables
    totalCost = document.getElementById('calculated-cost');
    if (fullDayButton.classList.contains(clickedClass)) {
      totalCost.innerHTML = numberOfDays * fullDayPrice;
    } else if (halfDayButton.classList.contains(clickedClass)) {
      totalCost.innerHTML = numberOfDays * halfDayPrice;
    }
}
