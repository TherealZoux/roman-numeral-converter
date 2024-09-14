const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanValues = [
        { value: 1000, symbol: 'M' }, 
        { value: 900, symbol: 'CM' },  
        { value: 500, symbol: 'D' },   
        { value: 400, symbol: 'CD' },  
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },   
        { value: 10, symbol: 'X' },    
        { value: 9, symbol: 'IX' },    
        { value: 5, symbol: 'V' },     
        { value: 4, symbol: 'IV' },   
        { value: 1, symbol: 'I' }      
    ];

let result = "";


btn.addEventListener('click',checkInput);

function checkInput(){
  if (!input.value) {
    output.innerText = "Please enter a valid number"
  }
  else if (input.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1"
  }
  else if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
  }
  else{
    result = integerToRoman(input.value)
    output.innerText = result;
  }
}


function integerToRoman(num) {
  let roman = ''
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].value) {
      roman += romanValues[i].symbol; 
      num -= romanValues[i].value;   
    }
  }
  return roman;
}
 
