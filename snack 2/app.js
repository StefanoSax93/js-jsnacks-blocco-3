/*Snack2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri 
casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.*/

//chiedo il numero desiderato
const n = parseInt(prompt("Inserisci il numero di liste che vuoi generare"));
//creo la lista che conterrà gli array
const listaArray = [];
//creo il ciclo while
let i=0;
let array; 

while(i<n) {
    array = [];
    //faccio in modo che ogni array sia formato da 10 numeri casuali da 0 a 100
    for(let x=0; x<10; x++) {
        array[x]=Math.floor(Math.random() * 100)
    }
    listaArray[i]=array;
    i++
    console.log(array);
}
console.log(listaArray);

