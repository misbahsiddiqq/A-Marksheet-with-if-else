let investigativeReporting = 80
let consumerStudies = 80
let communicationDesig = 80
let research = 76;
let politics = 80 

let totalMarks = 500
let obtainedMarks = investigativeReporting+consumerStudies+communicationDesig+research+politics
let percentage = (obtainedMarks/totalMarks)*100;

console.log("Marksheet")
console.log("investigative Reporting Marks:", investigativeReporting);
console.log("Consumer Studies Marks:", consumerStudies);
console.log("Communication Marks:", communicationDesig);
console.log("Research Marks:", research);
console.log("politics", politics);
console.log("Total Marks:", totalMarks);
console.log("Obtained Marks:", obtainedMarks);
console.log("Percentage:", percentage.toFixed(2));

if (percentage >= 80){ 
console.log("Grade A+");
}

else (percentage >= 70);{
    console.log("Grade A")
}





