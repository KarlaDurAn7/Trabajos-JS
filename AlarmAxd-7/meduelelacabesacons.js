function contador(){
    let segundos = +document.querySelector('#segundos').value;
    setTimeout(finalizar, segundos * 1000);  //setTimeout es para cuenta regresiva 
}

function finalizar(){
    document.querySelector('#salida').textContent = 'ON';
    let alarma =document.querySelector('#alarma');
    alarma.play();
}

function reiniciar() {
    location.reload();
}