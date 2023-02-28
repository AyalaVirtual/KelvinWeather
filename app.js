// This line sets the value of kelvin. 
const kelvin = 293;

// This line sets the value of celsius.
let celsius = (kelvin - 273);

// This line sets the value of fahrenheit.
let fahrenheit = (celsius * (9/5) + 32);

// This line takes the decimal that was returned after converting from Celsius to Fahrenheit and rounds it down.  
fahrenheit = (Math.floor(fahrenheit));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice: This line sets the value of newton.
let newton = (celsius * (33/100));

// This line takes the decimal that was returned after converting from Celsius to Fahrenheit and rounds it down.
newton = (Math.floor(newton));

console.log(`The temperature is ${newton} degrees Newton.`);

