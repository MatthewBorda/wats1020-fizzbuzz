// Place your FizzBuzz code here. 

//Function FizzBuzz produces FizzBuzz output based on paramaters passed to the function
  //rangestart and rangeend provide start and end value for loop
  //fizzval and buzzval provide the values for fizz and buzz response respectively
    //if both fizzval and buzzval logic are met FizzBuzz value is returned
var FizzBuzz = function(rangestart, rangeend, fizzval, buzzval) {


  for (rangestart; rangestart <= rangeend; rangestart++)
    if
    //Divisable by both fizz value and buzz value then FizzBuzz
    (rangestart % fizzval === 0 &&
      rangestart % buzzval === 0) {
      document.writeln('<li>FizzBuzz</li>');
    }
    //Divisible by fizz value then Fizz
    else if (rangestart % fizzval === 0) {
    document.writeln('<li>Fizz</li>');
  }
  //Divisible by fizz value then Buzz
  else if (rangestart % buzzval === 0) {
    document.writeln('<li>Buzz</li>');
  }
  //Else output number
  else {
    document.writeln('<li>' + rangestart + '</li>');
  }
}

//FizzBuzz function parameters
FizzBuzz(1, //Range start value
  20, //Range end value
  3, //Fizz value
  5); //Buzz value