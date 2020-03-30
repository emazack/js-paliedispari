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
  document.getElementById('palindromi').innerHTML = "La parola è un palindromo"; // Fornisco l'esito del confronto positivo

} else {
  document.getElementById('palindromi').innerHTML = "La parola NON è un palindromo" // Fornisco l'esito del confronto negativo
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Creo gioco pari o dispari;
// pc sceglie pari o dispari e un numero da 1 a 5; pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// creazione di una funziona che sceglie automaticamente un numero da 1 a 5

// creazione di una funziona che sceglei automanticamen pari o dispari

// il giocatore 1 (pc) sceglie pari o dispari. Salvo la risposta

// inoltre sceglie un numero da 1 a 5. Lo salvo

// il giocatore 2 (pc) sceglie pari o dispari. Salvo la risposta

// inoltre sceglie un numero da 1 a 5. Lo salvo

// Sommiamo i due numeri e dichiariamo chi ha vinto
