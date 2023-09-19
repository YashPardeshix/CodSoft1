let result =  '0';

function updateDisplay() 
{
  document.querySelector('.result').textContent = result ;
}

function appendToDisplay(value) 
{
  if (result === '0') 
  {
    result = value;
  } else 
  {
    result += value;
  }
}

function calculate() 
{
  try 
  {
    result = eval(result).toString();
  } 
  catch (error) 
  {
    result = 'Error' ;
  }
  updateDisplay();
}

function clearDisplay() 
{
  result ='0' ;
  updateDisplay();
}

document.querySelectorAll('.button').forEach(function(button)
 {
button.addEventListener('click',function() 
   {
    const buttonValue  =  button.textContent;
    if (buttonValue  ===  'AC') {
      clearDisplay();
    } else if (buttonValue === '=')  
     {
      calculate();
    } else if (buttonValue === 'DEL') 
{
    result =  result.slice(0, -1);
    } else {
      appendToDisplay(buttonValue);
    }
    updateDisplay();
});
});
