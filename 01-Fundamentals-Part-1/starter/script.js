//'use strict';
const markMass=78;
const markHeight = 1.69; 
const johnMass=92;
const johnHeight=1.95;

const markBMI = markMass/markHeight**2;
const johnBMI = johnMass/johnHeight**2;

const markHigherBMI = markBMI>johnBMI;

const hasDriversLicense = false; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
