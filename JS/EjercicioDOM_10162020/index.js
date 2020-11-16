const mainDiv = document.querySelector('#main');

mainDiv.style.display = 'flex';

const paragraphs = document.querySelectorAll('div > p');

for (let i = 0; i < paragraphs.length; i++) {
  if (i === 0) {
    paragraphs[i].innerText = 'Lorem fistrum a peich apetecan mamaar pupita ahorarr ese pedazo de. Tiene musho peligro te va a hasé pupitaa está la cosa muy malar a peich la caidita por la gloria de mi madre pupita benemeritaar sexuarl.';
  } else if (i === 1) {
    paragraphs[i].innerText = 'Hasta luego Lucas te voy a borrar el cerito no puedor diodeno jarl torpedo caballo blanco caballo negroorl se calle ustée ese pedazo de no puedor.';
  } else if (i === 2) {
    paragraphs[i].innerText = 'Qué dise usteer al ataquerl amatomaa diodenoo ahorarr te va a hasé pupitaa quietooor. Ese hombree tiene musho peligro ese que llega ahorarr torpedo ese hombree se calle ustée. Caballo blanco caballo negroorl ese que llega se calle ustée apetecan sexuarl.';
  }
}

const allSpans = document.querySelectorAll('span');

for (let i = 0; i < allSpans.length; i++){
  allSpans[i].style.fontSize = '30px';
  allSpans[i].style.display = 'block';
}
