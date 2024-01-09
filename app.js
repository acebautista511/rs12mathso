const questions = [
    {
        question: "What is a proportion?",
        answers: [
        {text:" A ratio with only one term  ", correct: true},
        {text:"A ratio with only one term  ", correct: false},
        {text:"A ratio where the first term is smaller than the second term  ",correct: false},
        {text:"A ratio where the first and fourth terms are equal", correct: false},

        ]
    },
    {
        question: "In the proportion a:b = c:d  what are the extremes?",
        answers: [
        {text:" c and d  ", correct: false},
        {text:"a and b ", correct: true},
        {text:" a and d ",correct: false},
        {text:"b and c", correct: false},

        ]
    },
    {
    
        question: "What are the means in the proportion a:b = c:d?",
        answers: [
        {text:"a and b", correct: false},
        {text:" c and d ", correct: false},
        {text:"a and d  ",correct: false},
        {text:"b and c", correct: true},

        ]
    },


    {
        question: " If 3:5 = x:15 , what is the value of 'x'?",
        answers: [
        {text:"5  ", correct: false},
        {text:" 9 ", correct: true},
        {text:"8  ",correct: false},
        {text:"25", correct: false},

        ]
    },

    {
        question: "Solve for 'y' in the proportion 7:10 = 14:y ",
        answers: [
        {text:"5 ", correct: false},
        {text:"20  ", correct: false},
        {text:"10",correct: true},
        {text:"28", correct: false},

        ]
    },
    {
        question: "If a:2 = 5:8, what is the value of 'a'?",
        answers: [
        {text: " 1.25 ", correct: false},
        {text:"3.2 ", correct: false},
        {text:" 2.5 ",correct: false},
        {text:"6.25", correct: true},

        ]
    },   
    {
        question: "  In the proportion 3:5 = x:10 , what is the value of 'x'?",
        answers: [
        {text: " 4 ", correct: false},
        {text:"6   ", correct: false},
        {text:" 8 ",correct: true},
        {text:"12", correct: false},

        ]
    },
    {
        question: "If x:3 = 15:9 , what is the value of 'x'?",
        answers: [
        {text: " 5   ", correct: true},
        {text:"27 ", correct: false},
        {text:" 8",correct: false},
        {text:" 45", correct: false},

        ]
    },
    {
        question: "What is the fourth term (d) in the proportion 2:3 = 4:d ?",
        answers: [
        {text: " 2   ", correct: false},
        {text: " 3 ", correct: false},
        {text:" 4 ",correct: false},
        {text:" 6 ", correct: true},

        ]
    },
    {
        question: "  In the proportion 4:7 = 12:21 , what are the means?",
        answers: [
        {text: " 4 and 21  ", correct: false},
        {text:"7 and 12 ", correct: true},
        {text:"  4 and 12  ",correct: false},
        {text:"7 and 21", correct: false},

        ]
    },
    {
        question: "   If a recipe calls for 3 cups of flour and 2 cups of sugar to make a certain cake, what is the ratio of flour to sugar?",
        answers: [
        {text: "  3:2  ", correct: true},
        {text:" 2:3  ", correct: false},
        {text:"1:2  ",correct: false},
        {text:" 2:1", correct: false},

        ]
    },
    {
        question: "Simplify the ratio 15:20 to its simplest form.",
        answers: [
        {text: "  3:4 ", correct: true},
        {text:" 5:6 ", correct: false},
        {text:" 4:5   ",correct: false},
        {text:" 2:3", correct: false},

        ]
    },                  
    {
        question: " If the ratio of boys to girls in a class is 5:3, and there are 25 girls, how many boys are there?",
        answers: [
        {text: "  15   ", correct: false},
        {text:" 30  ", correct: true},
        {text:"  45   ",correct: false},
        {text:"50", correct: false},

        ]
    },                  
    {
        question: "   Solve for 'x' in the proportion 4/x = 8/12.",
        answers: [
        {text: "  6    ", correct: false},
        {text:" 8  ", correct: true},
        {text:"  12    ",correct: false},
        {text:"16", correct: false},

        ]
    },                  
    {
        question: "    A rectangle has a length of 18 units and a width of 12 units. What is the ratio of length to width?",
        answers: [
        {text: " 3:2   ", correct: true},
        {text:" 4:3    ", correct: false},
        {text:"   2:3    ",correct: false},
        {text:"1:2", correct: false},

        ]
    },                  
    {
        question: "      If the cost of 4 pens is $12, what is the cost of 10 pens?",
        answers: [
        {text: "  $24    ", correct: false},
        {text:" $30     ", correct: true},
        {text:"  $36  ",correct: false},
        {text:" $40", correct: false},

        ]
    },                  
    {
        question: "   The ratio of apples to oranges in a basket is 4:5. If there are 36 oranges, how many apples are there? ",
        answers: [
        {text: " 16   ", correct: true},
        {text:" 20      ", correct: false},
        {text:"   25     ",correct: false},
        {text:" 30", correct: false},

        ]
    },              
    {
        question: " If the perimeter of a rectangle is 48 units and its length is 15 units, what is its width? ",
        answers: [
        {text: "  6     ", correct: false},
        {text:" 9      ", correct: true},
        {text:"   12       ",correct: false},
        {text:" 18", correct: false},

        ]
    },                      
    {
        question: "   The ratio of blue balls to red balls in a bag is 3:7. If there are 35 red balls, how many blue balls are there?",
        answers: [
        {text: "  10    ", correct: false},
        {text:" 15      ", correct: true},
        {text:"   18        ",correct: false},
        {text:" 21", correct: false},

        ]
    },                
    {
        question: "   If a recipe calls for 2 cups of oil and 5 cups of water to make a certain solution, what is the ratio of oil to water?",
        answers: [
        {text: " 5:2    ", correct: false},
        {text:" 2:5      ", correct: true},
        {text:"  7:10       ",correct: false},
        {text:"  5:7", correct: false},

        ]
    },                            
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    console.log (currentQuestion)
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function generateRandomQuestion(){
    return  Math.floor(Math.random() * 19+ 1)
}

const randomId = generateRandomQuestion()
console.log(randomId);

function resetState (){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore (){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
   handleNextButton ();
    }else {
        startQuiz();
    }
});

startQuiz();
