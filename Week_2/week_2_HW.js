function sumOfSquareAreas(a, b){
    return(a*a + b*b);
}

console.log(sumOfSquareAreas(3, 9));
console.log(sumOfSquareAreas(4, 8));
console.log(sumOfSquareAreas(5, 6));


function gradeCalculator(homeworkAvg, quizAvg, examAvg){
    return(homeworkAvg*0.1 + quizAvg*0.15 + examAvg*0.75);
}

console.log(gradeCalculator(75, 70, 80));
console.log(gradeCalculator(90, 95, 75));
console.log(gradeCalculator(50, 55, 98));