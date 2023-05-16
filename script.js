function loadCity(element){
    alert('Loading weather report for ' + element.innerText);
}

var cookieContainer = document.querySelector(".cookies");
function acceptCookies(element){
    cookieContainer.remove();
}

// I'm sure there is an easier solution to this, but this is what I cam up to. Checking Solution file after thie.
var todH = parseFloat(document.querySelector(".today > .temperature-range > .tempH> .hot").innerText);
var todC = parseFloat(document.querySelector(".today > .temperature-range > .tempC> .cold").innerText);
var tomH = parseFloat(document.querySelector(".tomorrow > .temperature-range > .tempH> .hot").innerText);
var tomC = parseFloat(document.querySelector(".tomorrow > .temperature-range > .tempC> .cold").innerText);
var friH = parseFloat(document.querySelector(".friday > .temperature-range > .tempH> .hot").innerText);
var friC = parseFloat(document.querySelector(".friday > .temperature-range > .tempC> .cold").innerText);
var satH = parseFloat(document.querySelector(".saturday > .temperature-range > .tempH> .hot").innerText);
var satC = parseFloat(document.querySelector(".saturday > .temperature-range > .tempC> .cold").innerText);

function convertCtoF(temp){
    temp = Math.round(temp*1.8+32);
    return temp;
}
function convertFtoC(temp){
    temp = Math.round((temp-32)/1.8);
    return temp;
}

// after checking solution, they created a consistent naming convention so they do a for loop
// same amount of work, less code written.
function changeDegree(element){
    if (element.value == element.querySelector("#celcius").innerText){
        todH = convertFtoC(todH);
        todC = convertFtoC(todC);
        tomH = convertFtoC(tomH);
        tomC = convertFtoC(tomC);
        friH = convertFtoC(friH);
        friC = convertFtoC(friC);
        satH = convertFtoC(satH);
        satC = convertFtoC(satC);
        document.querySelector(".today > .temperature-range > .tempH> .hot").innerText = todH;
        document.querySelector(".today > .temperature-range > .tempC> .cold").innerText = todC;
        document.querySelector(".tomorrow > .temperature-range > .tempH> .hot").innerText = tomH;
        document.querySelector(".tomorrow > .temperature-range > .tempC> .cold").innerText = tomC;
        document.querySelector(".friday > .temperature-range > .tempH> .hot").innerText = friH;
        document.querySelector(".friday > .temperature-range > .tempC> .cold").innerText = friC;
        document.querySelector(".saturday > .temperature-range > .tempH> .hot").innerText = satH;
        document.querySelector(".saturday > .temperature-range > .tempC> .cold").innerText = satC;
    } else if (element.value == element.querySelector("#faren").innerText){
        todH = convertCtoF(todH);
        todC = convertCtoF(todC);
        tomH = convertCtoF(tomH);
        tomC = convertCtoF(tomC);
        friH = convertCtoF(friH);
        friC = convertCtoF(friC);
        satH = convertCtoF(satH);
        satC = convertCtoF(satC);
        document.querySelector(".today > .temperature-range > .tempH> .hot").innerText = todH;
        document.querySelector(".today > .temperature-range > .tempC> .cold").innerText = todC;
        document.querySelector(".tomorrow > .temperature-range > .tempH> .hot").innerText = tomH;
        document.querySelector(".tomorrow > .temperature-range > .tempC> .cold").innerText = tomC;
        document.querySelector(".friday > .temperature-range > .tempH> .hot").innerText = friH;
        document.querySelector(".friday > .temperature-range > .tempC> .cold").innerText = friC;
        document.querySelector(".saturday > .temperature-range > .tempH> .hot").innerText = satH;
        document.querySelector(".saturday > .temperature-range > .tempC> .cold").innerText = satC;
    } else {
        console.log('failed')
    }
}