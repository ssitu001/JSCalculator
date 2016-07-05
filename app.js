
//todo
//1.get numbers to show on input
//2. save numbers somewhere
 $(document).ready(function(){
  //global vars
  var valChainer = '';
   
  $('#allClear').on('click', function() {                  //console.log("allcleared!");
     result = '';
     displayValue(0);
  });

  $('.number').on('click', function() {
    var number = $(this).val();//get value
    var sum = valChainer += number; //chain the values
    //console.log(sum);
    displayValue(sum);
  }); 
   
   function displayValue(num) {
     document.getElementById('input').value = num;
    }
   

   
   
 });