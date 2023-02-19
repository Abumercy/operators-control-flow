// Question 3
let studentGroup = "SCIENCE";

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

if (studentGroup === "SCIENCE") {
  console.log(generalSubjects + ", " + scienceSubjects);
} else if (studentGroup === "SOCIAL SCIENCE") {
  console.log(generalSubjects + ", " + socialScienceSubjects);
} else if (studentGroup === "ARTS") {
  console.log(generalSubjects + ", " + artsSubjects);
} else {
  console.log(generalSubjects);  
}

// Question 5
function findNearestPowerOfTwo(num) {
  let pwr = 1;
  while (pwr < num) {
    pwr *= 2;
  }
  if (pwr - num > num - pwr / 2) {
    pwr /= 2;
  }
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  return pwr;
}
findNearestPowerOfTwo(10); 
findNearestPowerOfTwo(40); 
findNearestPowerOfTwo(50); 
