const x = document.getElementById("myAudio");
const click = document.getElementById("botao");



function playAudio() { 
  x.play(); 
}

function pauseAudio() { 
    x.pause(); 
}


function myFunction() {
    click.innerHTML = "YOU CLICKED ME!";
  }

// function posicaoRandomica() {
//     var posicaoX = Math.floor(Math.random() * largura) - 90
//     var posicaoY = Math.floor(Math.random() * altura) -90
// }


