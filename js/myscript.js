// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

// Chiedo ad utente una parola. La memorizzo
var UserWord = prompt("Inserisci la parola");
// Ripesco la parola suddetta e ne ricavo il suo contrario
// Creo una funziona che faccia questo:
function ReverseMyWord(str) {
  var SplittedWord = str.split("");     //divido la parola in tutte le sue lettere
  var RevertedWord = SplittedWord.reverse();//Inverto l'ordine delle singole lettere
  var JoinedWord = RevertedWord.join("");     //Unifico le lettere per formare la parola
  return JoinedWord;
}
var ReversedWord = ReverseMyWord(UserWord);

// Confronto la parola iniziale con il suo contrario
if (UserWord === ReversedWord) {
  document.getElementById('palindromi').innerHTML = "La parola " + UserWord + " è un palindromo"; // Fornisco l'esito del confronto positivo

} else {
  document.getElementById('palindromi').innerHTML = "La parola " + UserWord + " NON è un palindromo" // Fornisco l'esito del confronto negativo
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Creo gioco pari o dispari;
// pc sceglie pari o dispari e un numero da 1 a 5; pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// creazione di una funziona che sceglie automaticamente tra pari e disp
function ScegliPariDispari() {
  var pari = 1;
  var dispari = 0;
  var pariodispari = Math.floor(Math.random() * 2);
  console.log(pariodispari);
  if (pariodispari === pari) {
    return "Pari"
  } else {
    return "Dispari"
  }
}
// creazione di una funziona che sceglie automanticamen un numero da 1 a 5
function ScegliNumero1a5() {
  var risultato = Math.floor(Math.random() * (6 - 1) + 1);
  return risultato;
}
// il giocatore 1 (pc) sceglie pari o dispari. Salvo la risposta
var SceltaGiocatoreUno = ScegliPariDispari();
console.log("Scelta giocatore 1: " + SceltaGiocatoreUno);

// inoltre sceglie un numero da 1 a 5. Lo salvo
var SceltaNumeroGiocatoreUno = ScegliNumero1a5();
console.log("Scelta NUMERO giocatore 1: " + SceltaNumeroGiocatoreUno);
console.log("------------------------------------------");

// il giocatore 2 (pc) sceglie pari o dispari. Salvo la risposta
var SceltaGiocatoreDue = ScegliPariDispari();
console.log("Scelta giocatore 2: " + SceltaGiocatoreDue);

// inoltre sceglie un numero da 1 a 5. Lo salvo
var SceltaNumeroGiocatoreDue = ScegliNumero1a5();
console.log("Scelta NUMERO giocatore 2: " + SceltaNumeroGiocatoreDue);
console.log("------------------------------------------");

// Sommiamo i due numeri e dichiariamo chi ha vinto
var SommaFinale = SceltaNumeroGiocatoreDue + SceltaNumeroGiocatoreUno;
console.log("La somma finale è: " + SommaFinale);
console.log("------------------------------------------");
// Decretiamo se il numero vincitore è pari o dispari
if (SommaFinale % 2 == 0) {
  var VittoriaPari = "Pari";
  document.getElementById('paridispariesito').innerHTML = "Pari Vince";
} else {
  var VittoriaDispari = "Dispari";
  document.getElementById('paridispariesito').innerHTML = "Dispari Vince";
}
// decretiamo il vincitore
if (SceltaGiocatoreUno == VittoriaPari || SceltaGiocatoreUno == VittoriaDispari) {
  document.getElementById('paridisparig1').innerHTML = "Giocatore 1 Vince"
}
if (SceltaGiocatoreDue == VittoriaPari || SceltaGiocatoreDue == VittoriaDispari) {
  document.getElementById('paridisparig2').innerHTML = "Giocatore 2 Vince"
}
