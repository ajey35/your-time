const clock = document.querySelector(".time");
setInterval(function(){
    let dt = new Date();
    clock.innerHTML = dt.toLocaleTimeString();
},1000);