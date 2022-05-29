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
        array[x]=Math.floor(Math.random() * 100) + 1;
    }
    //aggiungo l'array generato alla lista degli array
    listaArray.push(array);
    i++
    console.log(array);
}
console.log(listaArray);

//METODO 2 (USANDO SOLO WHILE)
//finché la lunghezza di array generati è minore del numero inserito
//ripeto il ciclo

/* while(listaArray.length<n) {
    array = [];
    //faccio in modo che ogni array sia formato da 10 numeri casuali da 0 a 100
    while(array.length<10) {
        //creo un numero casuale da 1 a 100
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;

        //controllo che il numero non sia già presente nell'array
        if (!array.includes(numeroCasuale)) {
            //se il numero non è presente nell'array lo aggiungo
            array.push(numeroCasuale)
        }
    }
    listaArray.push(array);
    console.log(array);
}*/