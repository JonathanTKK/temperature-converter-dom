console.log('Hello, front end');

var userInput, output, toggleCheck = 0;

document.getElementById('submit').addEventListener('click',getInput);
document.getElementById('clear').addEventListener('click',clear);
document.getElementById('fahren').addEventListener('click',switchUnitType);
document.getElementById('celcius').addEventListener('click',switchUnitType);


//document.getElementById('toggle').addEventListener('click',toggle);

//-----Functions for Buttons-----
  //Collects user input data
  function getInput(){
    //console.log("getInput() initialised"); //For testing purpose
    userInput = document.getElementById("input").value;
    //console.log("User entered : " + userInput);
    if (userInput === ""){
      document.getElementById('result').textContent = "No input detected";
    }
    else{
      convert();
    }

  }
  //Clears text input space
  function clear(){
    //console.log("clear() initialised");//For testing purpose
    document.getElementById("input").value = "";
    document.getElementById('result').textContent = "Input value to convert";
  }

//-----Functions for conversion-----

  function convert(){
    //console.log("degCel() initialised"); //For testing purpose
    //console.log(document.getElementById('fahren').checked===true);//For testing purpose only
    if (document.getElementById("fahren").checked===true){
      output = ((Math.round(((userInput * 1.8)+32)*10))/10);
      //console.log(output);//For testing

      if(output>50 && output<95){
        document.getElementById('output').style.backgroundColor = "white";
      }
      else if(output>95){
        document.getElementById('output').style.backgroundColor = "red";
      }
      else if (output<50) {
        document.getElementById('output').style.backgroundColor = "blue";
      }


      document.getElementById('result').textContent = output + "°F" ;
    }
    if(document.getElementById("celcius").checked===true){
      output = (Math.round((userInput-32)/(5/9))/10);
      //console.log(output);//For testing

      if(output>10 && output<35){
          document.getElementById('output').style.backgroundColor = "white";
      }
      else if(output>35){
        document.getElementById('output').style.backgroundColor = "red";
        }
      else if (output<10) {
        document.getElementById('output').style.backgroundColor = "blue";
        }
      document.getElementById('result').textContent = output + "°C";
      }
    }

  function switchUnitType(){
    if(document.getElementById('celcius').checked===true){
        document.getElementById('convertFrom').textContent = "Fahrenheit";
      }
        else{
          document.getElementById('convertFrom').textContent = "Celcius";
        }
    }
