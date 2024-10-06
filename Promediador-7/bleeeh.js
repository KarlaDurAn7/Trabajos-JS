function promediar(){
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const mostrar = document.querySelector('#salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3);
    mostrar.textContent = promedio;

    if (promedio >= 6 && promedio <=10){
        mostrar.textContent = promedio + ' YIPPEEEヾ(＠⌒ー⌒＠)ノ '  
    } else if (promedio >=1 && promedio <6){
        mostrar.textContent = promedio + ' (；′⌒`) '
    } else{
        mostrar.textContent = 'Ingrese notas entre 1 a 10';
    }
}