document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    
    container.addEventListener("click", function(event) {
      if (event.target.classList.contains("ball")) {
        event.target.remove();
        generateBall();
      }
    });
  
    function generateBall() {
      const ball = document.createElement("div");
      ball.classList.add("ball");
      const size = Math.floor(Math.random() * 50) + 20;
      const maxTop = window.innerHeight - size;
      const maxLeft = window.innerWidth - size;
      const top = Math.floor(Math.random() * maxTop);
      const left = Math.floor(Math.random() * maxLeft);
      ball.style.width = size + "px";
      ball.style.height = size + "px";
      ball.style.top = top + "px";
      ball.style.left = left + "px";
      container.appendChild(ball);
    }
  
    // Generar bolas iniciales
    for (let i = 0; i < 10; i++) {
      generateBall();
    }
  });
  