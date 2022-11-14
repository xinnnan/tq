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













  }





)



// questions options and answers array, will try use json

fetch('qoa.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });




