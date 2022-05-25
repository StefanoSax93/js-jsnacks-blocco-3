/*Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire 
nell’array. Continua a chiedere i numeri all’utente e a inserirli 
nell’array fino a quando la somma degli elementi è minore di 50.*/

//creo un arrey vuoto
const listaVuota = [];

let somma = 0;

while(somma < 50) {
    //creo un prompt per chiedere i numeri all utente 
    const question = parseInt(prompt("inserisci un numero"));
    listaVuota.push(question);
    somma += question;
    console.log(listaVuota);
    console.log(somma);
}