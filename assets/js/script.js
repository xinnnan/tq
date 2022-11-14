var count=0;
var time=30;
var marks=document.getElementById("marks");
var timer;
var answer=[];
var nameinit=document.getElementById("formGroupExampleInput");
var saveButton=document.getElementById("submitbtn");



$(document).ready(function(){
  // few pages are hidden in the begining 
  $('#finish').hide()
  $('#main').hide();
  $('#result').hide();
  $('#result-form').hide();
  buttons();
  
  function buttons(){
    if (count >0){
      $('#last').show();
      if (count==3){
        $('#next').hide();
        $('#finish').show();
      }
      else {
        $('#next').show();
      }
    }
    else{
      $('#last').hide();
    }
    }
    function adding_ques(data,i){
      $('#question').text(data[i].Quiz)
				$('#optionsA').text(data[i].option1)
				$('#optionsB').text(data[i].option2)
				$('#optionsC').text(data[i].option3)
				$('#optionsD').text(data[i].option4)
				$('#number').text(Number(i + 1));
    }













  }





)



// questions options and answers array
data = {
  "qoa":[
      {"question":"what is bootstrap?",
      "optiona":"A. Bootstrap is a powerful, feature-packed frontend toolkit.",
      "optionb":"B. A programming language.",
      "optionc":"C. A software.",
      "optiond":"D. A hardware componenet.",
      "answer":"A. Bootstrap is a powerful, feature-packed frontend toolkit."
      },
      {"question":"what is jquery?",
      "optiona":"A.jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation.",
      "optionb":"B. A programming language.",
      "optionc":"C. A software.",
      "optiond":"D. A hardware componenet.",
      "answer":"A.jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation."
      },
      {"question":"what is html?",
      "optiona":"A. A software framework.",
      "optionb":"B. A programming language.",
      "optionc":"C. A software.",
      "optiond":"D. A hardware componenet.",
      "answer":"B. A programming language."
      }
  ]
};




