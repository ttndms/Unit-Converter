// Array to store the numbers entered by the user
let number = [];

// Get the necessary HTML elements
const buttonEl = document.getElementById("button-el");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// Event listener for the button click
buttonEl.addEventListener("click", function() {
  // Add the input value to the number array
  number.push(inputEl.value);
  console.log(number);
  // Call the unitConverter function to perform the conversions
  unitConverter();
});

// Function to perform the unit conversions
function unitConverter() {
  // Retrieve the last input value from the number array
  const lastInputValue = number[number.length - 1];

  // Convert length from meters to feet and vice versa
  const lengthInMeters = lastInputValue * 3.28084;
  const lengthInFeet = lastInputValue / 3.28084;

  // Convert volume from liters to gallons and vice versa
  const volumeInGallons = lastInputValue * 0.264172;
  const volumeInLiters = lastInputValue * 3.78541;

  // Convert mass from kilograms to pounds and vice versa
  const massInKilograms = lastInputValue * 2.20462;
  const massInPounds = lastInputValue / 2.20462;

  // Log the conversion results to the console
  console.log(`${lastInputValue} meters = ${lengthInMeters.toFixed(3)} feet`);
  console.log(`${lastInputValue} feet = ${lengthInFeet.toFixed(3)} meters`);
  console.log(`${lastInputValue} liters = ${volumeInGallons.toFixed(3)} gallons`);
  console.log(`${lastInputValue} gallons = ${volumeInLiters.toFixed(3)} liters`);
  console.log(`${lastInputValue} pounds = ${massInKilograms.toFixed(3)} kilos`);
  console.log(`${lastInputValue} kilos = ${massInPounds.toFixed(3)} pounds`);

  // Update the text content of the HTML elements with the conversion results
  lengthEl.textContent = `${lastInputValue} meters = ${lengthInMeters.toFixed(3)} feet | ${lastInputValue} feet = ${lengthInFeet.toFixed(3)} meters`;
  volumeEl.textContent = `${lastInputValue} liters = ${volumeInGallons.toFixed(3)} gallons | ${lastInputValue} gallons = ${volumeInLiters.toFixed(3)} liters`;
  massEl.textContent = `${lastInputValue} kilos = ${massInKilograms.toFixed(3)} pounds | ${lastInputValue} pounds = ${massInPounds.toFixed(3)} kilos`;
}