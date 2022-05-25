/*Snack3
Il software deve chiedere per 5 volte all’utente di inserire un 
numero. Il programma stampa la somma di tutti i numeri inseriti.*/

let i=0;
let somma=0;

while(i<5) {
    //creo la richiesta
    const question=parseInt(prompt("inserisci un numero"));
    i++;
    
    somma+=question;
}

console.log(somma)
