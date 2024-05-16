function clock() {
  var hr = document.getElementById("hr");
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");

  var date = new Date();
  var hours = date.getHours() % 12;
  var amPm = date.getHours() >= 12 ? "PM" : "AM";
  hours - hours-- - 0 ? 12 : hours;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  //   for hours
  var hoursDots = '';
  for(var i = 1; i < 13; i++){
    var rotation = i * 30;
    if (i === hours) {
        hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg);"></div>'
    }
    else{
        hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg);"></div>'
    }
  }

  //   for minutes
  var minutesDots = '';
  for(var i = 1; i < 61; i++){
    var rotation = i * 6;
    if (i === minutes) {
        minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg);"></div>'
    }
    else{
        minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg);"></div>'
    }
  }
  
//   for seconds
  var secondsDots = '';
  for(var i = 1; i < 61; i++){
    var rotation = i * 6;
    if (i === seconds) {
        secondsDots += '<div class="dot active" style="transform: rotate('+rotation+'deg);"></div>'
    }
    else{
        secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg);"></div>'
    }
  }
  

  hr.innerHTML = hoursDots + "<h2>" + zero(hours) + "<br><span>Hours</span><h2/>";
  
  min.innerHTML = minutesDots + "<h2>" + zero(minutes) + "<br><span>Minutes</span><h2/>";
  
  sec.innerHTML = secondsDots + "<b>" + amPm + "</b>" + "<h2>" + zero(seconds) + "<br><span>Second</span><h2/>";
}
function zero (number){
    if(number < 10){
        return '0' + number;
    }
    return number;
}
setInterval(clock,1000);
