let _then;
var buttonCounter = 0;
var _msecond = 1;
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
document.querySelector('#grad').style = "color: var(--fg);font-size: small;";
const GRADCOUNTER = () => {
  _then = new Date('05/26/2023 18:00:00').getTime();
  distance = _then - new Date();
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  var miliseconds = Math.floor((distance % _second) / _msecond);
  document.querySelector('#grad').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, and ${miliseconds} miliseconds left until you graduate!`
};
const emCounter = ()=> {
 if (buttonCounter > 2){
  _thenEm = new Date('06/14/2023 08:35:00').getTime();
  distanceEm = _thenEm - new Date();
  var daysEm = Math.floor(distanceEm / _day);
  var hoursEm = Math.floor((distanceEm % _day) / _hour);
  var minutesEm = Math.floor((distanceEm % _hour) / _minute);
  var secondsEm = Math.floor((distanceEm % _minute) / _second);
  var milisecondsEm = Math.floor((distanceEm % _second) / _msecond);
  document.querySelector('#EmCounter').innerHTML = `${daysEm} days, ${hoursEm} hours, ${minutesEm} minutes, ${secondsEm} seconds, and ${milisecondsEm} miliseconds left until you graduate!`
 }
 else {
  document.querySelector('#EmCounter').innerHTML = ``;
 }
 
}
setInterval(GRADCOUNTER, 10);
setInterval(emCounter, 10);
document.getElementById('emelyButton').onclick = (()=>{buttonCounter++}) 
