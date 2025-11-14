// Author: hamidullah hamidi
// Date: 2025/12/11

// Question: 12 : Traffic Light System using switch-case

// Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go).
// Example:
// Input: Green
// Output: Go

function trafficLightSystem(color) {
  switch (color) {
    case 'Red':
      return 'Stop';
    case 'Yellow':
      return 'Ready to go';
    case 'Green':
      return 'Go';
    default:
      return 'Invalid traffic light';
  }
}

console.log(trafficLightSystem('Red')); // Stop

module.exports = trafficLightSystem;
