const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
   event.preventDefault();
   
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#result');
   

   if (height === ' ' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Give a valid height ${height}`
   }
   else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Give a valid weight ${weight}`
   }
   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    
    const result2 = document.querySelector('#result2');
    if (bmi <= 18.6) {
    result2.innerHTML = `<span>is is true</span>`;
   
    }
    
    else if (bmi >= 18.6 && bmi <= 24.9 ) {
        result2.innerHTML = `Normal Weight ${bmi}`;
    }
    
    else {
        result2.innerHTML = `Over Weight ${bmi}`;
    }
   };
 
  
   
});
