var count=0;
var time=30;
var marks=document.getElementById("marks");
var timer;
var nameinit=document.getElementById("formGroupExampleInput");
var saveButton=document.getElementById("submitbtn");
// questions options and answers array, will try use json 
const qoa=[
  {
    number:1,
    question:"what is bootstrap?",
    answer:"A. Bootstrap is a powerful, feature-packed frontend toolkit.",
    options:[
       "A. Bootstrap is a powerful, feature-packed frontend toolkit.",
       "B. A programming language.",
       "C. A software.",
       "D. A hardware componenet."
    ]
  },
  {
    number:2,
    question:"what is jquery?",
    answer:"A.jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation.",
    options:[
      "A.jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation.",
      "B. A programming language.",
      "C. A software.",
      "D. A hardware componenet."
    ]
  },
  {
    number:3,
    question:"what is html?",
    answer:"B. A programming language.",
    options:[
      "A. A software framework.",
      "B. A programming language.",
      "C. A software.",
      "D. A hardware componenet."
    ]
  },
];
// few pages are hidden in the begining 
$('#finish').hide();
$('#main').hide();
$('#result').hide();
$('#result-form').hide();
buttons();
//when start is pressed 
$('#start_btn').click(function () {
  timer = setInterval(timer_function, 1000);
  function timer_function() {
  $('#time').text(time);
  if (time < 1) {
  clearInterval(timer);
  alert("Out of time");
  creating_result(data);
  $("#main").hide();
  $("#result").show();
  time--}}}
  
// button display depends on the number of questions left
function buttons(){
  if(count >0){
    $('#last').show();
    if(count==3){
      $('#next').hide();
      $('#finish').show();
    }
    else{
      $('#next').show();
    }
  };
// define button show or no show
  function buttons(){
    if(count >0){
      $('#last').show();
      if(count==3){
        $('#next').hide();
				$('#finish').show();
      }
      else{
        $('#next').show();
      }
    }
  
  // adding questions
  function adding_q(qoa,i){
    $(`#question`).text(qoa[i].question)
    $(`#optionA`).text(qoa[i].options[0])
    $(`#optionB`).text(qoa[i].options[1])
    $(`#optionC`).text(qoa[i].options[2])
    $(`#optionD`).text(qoa[i].options[3])
    $('#number').text(Number(i + 1));
  }

  // verify answer 



