const clock = document.querySelector("h2#clock");
    //document.querySelector("clock"); OR .getElementById("clock");
function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);