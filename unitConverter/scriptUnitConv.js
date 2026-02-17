function convert(){
  const inputValue = document.getElementById("userInput").value;
  const selectedUnit = document.getElementById("unit").value;
  const milesToKm = selectedUnit === "milesToKm";
  let result = 0;
  if (milesToKm === true) {
    result = inputValue * 1.60934;
  } else {
    result = inputValue / 1.60934;
  }
  const resultString = inputValue + " miles are " + result + " km";
  console.log(resultString);
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
}
