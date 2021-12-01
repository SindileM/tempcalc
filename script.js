
function convertCelsius() {
    let errorString = "try entering just a number...";
    let degFahren = document.getElementById("degFahren").value;
    let degCent = (5 / 9) * (degFahren - 32);
    let resultCelsius =
      degFahren +
      " &deg;F converts to approximately " +
      Math.round(degCent) +
      " &deg;C";
    if (!isNaN(degFahren)) {
      document.getElementById("resultCelsius").innerHTML = resultCelsius;
      return false;
    } else {
      document.getElementById("resultCelsius").innerHTML = errorString;
      return false;
    }
  }
  
  function convertFahrenheit() {
    let errorString = "try entering just a number...";
    let degCelsius = document.getElementById("degCelsius").value;
    let  degFahren = (9 / 5) * degCelsius + 32;
    let  resultFahren =
      degCelsius +
      " &deg;C converts to approximately " +
      Math.round(degFahren) +
      " &deg;F";
    if (!isNaN(degCelsius)) {
      document.getElementById("resultFahren").innerHTML = resultFahren;
      return false;
    } else {
      document.getElementById("resultFahren").innerHTML = errorString;
      return false;
    }
  }
  
  function clearSum() {
      document.getElementById("degFahren").value = '';
      document.getElementById("resultCelsius").innerHTML = '';
    }
  
  
    function clearWords() {
      document.getElementById("degCelsius").value = '';
      document.getElementById("resultFahren").innerHTML = '';
    }