const averageGrade = 71;

if (averageGrade >= 0 && averageGrade < 60) {
    console.log("Bad");
}
else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Satisfactory");
}
else if (averageGrade > 70 && averageGrade <= 80) {
    console.log("Good");
}
else if (averageGrade > 80 && averageGrade <= 90) {
    console.log("Very Good");
}
else if (averageGrade > 90 && averageGrade <= 100) {
    console.log("Excellent");
}
else {
    console.log("The score is incorrect");
}