var bebop = require('node-bebop');

var drone = bebop.createClient();
console.log("fuck me");

drone.connect(function() {
    console.log("fuck");
  drone.takeOff();

  setTimeout(function() {
    drone.land();
  }, 5000);
});
