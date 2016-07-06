
 $(document).ready(function(){
  //global vars
  var valChainer = '';
   
  $('#allClear').click(zeroOutdisplayValue);

  $('#cancelEntry').on('click', function() {
    valChainer = valChainer.slice(0, -1);                  
    displayValue(valChainer);
  });

  $('.number').on('click', function() {
    var number = $(this).val();//get value
    var chained = valChainer += number; //chain the values
    
    displayValue(chained);
  }); 

  //Operator
  $('.operator').on('click', function() {
    //zeroOutdisplayValue();
    var operator = $(this).val();
    var chained = valChainer += operator;
    displayValue(chained);

  });

  $('#equals').click(equalsButton);

  function equalsButton() {
    var evaluation = eval(valChainer);
    valChainer = evaluation.toString();
    displayValue(evaluation);
  }

   
  function displayValue(num) {
    document.getElementById('input').value = num;
  }
   
  function zeroOutdisplayValue() {
    displayValue(0);
    valChainer = '';
  } 

 });