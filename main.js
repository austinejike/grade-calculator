/*Create a grade calculator that takes in two arguments: the student score and the
total possible score. Generate the letter grade and the percentage score of the
student. You are required to call the function, pass in students score and total
possible score.
(A => 90 - 100) (B =>80 -89) ( C => 70 -79) (D => 60-69) (F => 0 - 59)
*/
//debugger
var score = prompt("Enter your score")
var scoreConvert = parseFloat(score)
var passScore = prompt("Enter possible total score")
var passScoreConvert = parseFloat(passScore)
//var grade

let percentage 
function gradeCalc(socoreConvert, possibleScoreConvert){
    
    percentage =  scoreConvert / passScoreConvert  * 100 ;
    
    if(percentage >= 90){

        console.log(`your score is ${scoreConvert} , your  percentage score is ${percentage}% and your grade is A!`)

        }else if(percentage >=80 ){
                console.log(`your  score is ${scoreConvert} , your percentage score is ${percentage}% and your grade is B! `)

        }else if(percentage >= 70 )  {
        console.log(`your score is ${scoreConvert} , your  percentage score is ${percentage}% and your grade is C!` )

        }else if(percentage >= 60 ){
         console.log(`your score is ${scoreConvert} , your  percentage score is ${percentage}% and your grade is D!` )

        }else {

          console.log(`your score is ${scoreConvert} , your  percentage score is ${percentage}% and your grade is F!`)
       }

}
gradeCalc()
