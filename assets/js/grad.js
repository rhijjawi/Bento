let _then;

var _msecond = 1;
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
const GRADCOUNTER = () => {
  _then = new Date('05/26/2023 20:00:00').getTime();
  distance = _then - new Date();
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  var miliseconds = Math.floor((distance % _second) / _msecond);
  document.querySelector('#grad').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, and ${miliseconds} miliseconds left until you graduate!`
};
setInterval(GRADCOUNTER, 10);
