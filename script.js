/*
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise.
 * Uncomment each main function 1 by 1 (and comment out all others) to
 * execute the code for the relevant exercise.
 */

/**
 * Cost of Air Con
 */
var main = function (numHoursUsingAircon) {
  var numKwForAircon = 2;
  var costPerKwHour = 0.2;
  var costOfElectricity = numKwForAircon * numHoursUsingAircon * costPerKwHour;
  return `It would cost $${costOfElectricity} to use aircon for ${numHoursUsingAircon} hours.`;
};

/**
 * Screen Time
 */
// var main = function (numHoursPerDayOnApp) {
//   var numDaysPerYear = 365;
//   var numHoursInYearOnApp = numHoursPerDayOnApp * numDaysPerYear;

//   var numYearsInLifetime = 82;
//   var numHoursInLifetimeOnApp = numHoursInYearOnApp * numYearsInLifetime;

//   var numHoursPerDay = 24;
//   var numDaysInLifetimeOnApp = numHoursInLifetimeOnApp / numHoursPerDay;

//   return `If one spends ${numHoursPerDayOnApp} hours per day on one's favourite app, one would be spending ${numDaysInLifetimeOnApp} days in one's lifetime on this app.`;
// };

/**
 * Cost of Cellular Data
 */
// var main = function (numGbUsedPerMonth) {
//   var costOf50GbPlan = 19.99;
//   var num50GbPlans = Math.ceil(numGbUsedPerMonth / 50);
//   var amountPaidPerMonth = num50GbPlans * costOf50GbPlan;
//   var costPerGbUsed = amountPaidPerMonth / numGbUsedPerMonth;
//   return `If one used ${numGbUsedPerMonth} GBs of data per month, one would be purchasing ${num50GbPlans} 50 GB plans and paying $${costPerGbUsed.toFixed(2)} per GB used.`;
// };

/**
 * Ice Machine
 */
// var calcNumIceCubesNeeded = function (numGuests) {
//   var numDrinksPerGuest = 2;
//   var numIceCubesPerDrink = 4;
//   return numGuests * numDrinksPerGuest * numIceCubesPerDrink;
// };

// var calcNumPoundsOfIceFromCubes = function (numCubes) {
//   var numGramsPerCube = 1.5;
//   var numPoundsPerGram = 1 / 454;
//   return numCubes * numGramsPerCube * numPoundsPerGram;
// };

// var calcNumHoursNeededToProduceIce = function (numPoundsOfIce) {
//   var numPoundsOfIceProducedPerHour = 5;
//   return numPoundsOfIce / numPoundsOfIceProducedPerHour;
// };

// var main = function (numGuests) {
//   var numIceCubesNeeded = calcNumIceCubesNeeded(numGuests);
//   var numPoundsOfIceNeeded = calcNumPoundsOfIceFromCubes(numIceCubesNeeded);
//   var numHoursNeededToProduceIce = calcNumHoursNeededToProduceIce(numPoundsOfIceNeeded);
//   return `The hotel would need to run the ice machine for ${numHoursNeededToProduceIce} hours to produce enough ice for ${numGuests} guests.`;
// };

/**
 * Beer Order
 */
// var calcNumPintsPerQuarter = function (numCustomersPerDay) {
//   var daysInQuarterYear = 91;
//   var numCustomersPerQuarter = numCustomersPerDay * daysInQuarterYear;
//   var avgNumPintsPerVisit = 2;
//   var avgNumVisitsPerQuarter = 2;
//   return numCustomersPerQuarter * avgNumPintsPerVisit * avgNumVisitsPerQuarter;
// };

// var convertPintsToKegs = function (numPints) {
//   var numKegsPerPint = 1 / 124;
//   return numPints * numKegsPerPint;
// };

// var main = function (avgNumCustomersPerDay) {
//   const numPintsPerQuarter = calcNumPintsPerQuarter(avgNumCustomersPerDay);
//   const numKegsPerQuarter = convertPintsToKegs(numPintsPerQuarter);
//   return `The bar would need to buy ${numKegsPerQuarter} kegs of beer per quarter for an average of ${avgNumCustomersPerDay} customers per day.`;
// };

/**
 * Mortgage Calculator
 */
// var calcTotalPaybackAmt = function (principalAmt, loanDurationInYears) {
//   var apr = 0.03;
//   return principalAmt * ((1 + apr) ** loanDurationInYears);
// };

// var calcMonthlyPaymentAmt = function (totalAmt, loanDurationInYears) {
//   var numMonthsInYear = 12;
//   return totalAmt / loanDurationInYears / numMonthsInYear;
// };

// var main = function (loanAmount) {
//   var loanDurationInYears = 10;
//   var totalPaybackAmt = calcTotalPaybackAmt(loanAmount, loanDurationInYears);
//   var totalInterestAmt = totalPaybackAmt - loanAmount;
//   var monthlyPaymentAmt = calcMonthlyPaymentAmt(totalPaybackAmt, loanDurationInYears);
//   return `For a mortgage loan of $${loanAmount}, the customer would pay back a total of $${totalPaybackAmt} over 10 years.

//   The customer would pay a total of $${totalInterestAmt} in interest.

//   The customer would pay a $${monthlyPaymentAmt} over the loan duration.`;
// };
