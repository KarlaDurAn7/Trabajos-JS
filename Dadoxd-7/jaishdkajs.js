function dado() {
    let numero = document.getElementById('num').value; 
    let salida = document.getElementById('output'); 
    let random = Math.floor(Math.random() * numero) + 1; 
    salida.textContent = random;
}