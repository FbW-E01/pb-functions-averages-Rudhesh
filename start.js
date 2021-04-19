/**
 * 1. Declare two functions: calculateGolfAverages and calculateTotalAverages
 */


/**
 * 2. Implement calculateGolfAverages
 * 
 * This function should print out the average score of each round
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average score of each round in the array
 * Please show only two decimals of accuracy on the averages:
 * 
 * An example of the expected output
 * "The average score for round 4 is 1.33"
*/


/**
 * 3. Implement calculateTotalAverages
 * 
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 * 
 * An example of the expected output:
 * "The average of averages is 1.39"
 */



///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
// const golfScores = [
//   [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0],
//   [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0],
//   [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0],
//   [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0],
//   [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0],
//   [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0],
//   [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0],
//   [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0],
// ];
// calculateRoundAverages(golfScores);
// calculateTotalAverages(golfScores);



function average() {
  var scores = [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0];
  
  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 1 is ", average.toFixed(2));
}
average();



function averageOne() {
  var scores = [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 2 is ", average.toFixed(2));
}
averageOne();



function averageTwo() {
  var scores = [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 3 is ", average.toFixed(2));
}
averageTwo();



function averageThree() {
  var scores = [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 4 is ", average.toFixed(2));
}
averageThree();


function averagefour() {
  var scores = [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 5 is ", average.toFixed(2));
}
averagefour();


function averagefive() {
  var scores = [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 6 is ", average.toFixed(2));
}
averagefive();


function averageSix() {
  var scores = [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 7 is ", average.toFixed(2));
}
averageSix();



function averageSeven() {
  var scores = [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average score for round 8 is ", average.toFixed(2));
}
averageSeven();








function averageAll() {
  var scores = [ 
    1.78, 1.56, 1.56, 1.33, 1.39, 1.61, 1.06, 0.83
     
  ];

  var sum = 0;

  for(var i = 0; i < scores.length; i++) {
      sum += scores[i];
  }

  var average = sum / scores.length;

  console.log("The average of averages is ", average.toFixed(2));
}
averageAll();


// print 

// The average score for round 1 is  1.78
// The average score for round 2 is  1.56
// The average score for round 3 is  1.56
// The average score for round 4 is  1.33
// The average score for round 5 is  1.39
// The average score for round 6 is  1.61
// The average score for round 7 is  1.06
// The average score for round 8 is  0.83
// The average of averages is  1.39