function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKelvin").innerHTML = (valNum - 32) * (5 / 9);
}

