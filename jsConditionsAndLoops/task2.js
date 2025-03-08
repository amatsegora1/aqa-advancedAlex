const averageGrade = 70;

switch (true) {
    case (averageGrade >= 0 && averageGrade < 60):
        console.log("Bad");
        break;
    case (averageGrade >= 60 && averageGrade <= 70):
        console.log("Satisfactory");
        break;
    case (averageGrade > 70 && averageGrade <= 80):
        console.log("Good");
        break;
    case (averageGrade > 80 && averageGrade <= 90):
        console.log("Very Good");
        break;
    case (averageGrade > 90 && averageGrade <= 100):
        console.log("Excellent");
        break;
    default:
        console.log("The score is incorrect");
}