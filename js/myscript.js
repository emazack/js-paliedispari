// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

// Chiedo ad utente una parola. La memorizzo
var UserWord = prompt("Inserisci la parola");
// Ripesco la parola suddetta e ne ricavo il suo contrario
// Creo una funziona che faccia questo:
function ReverseWord() {
  var SplittedWord = UserWord.split();;     //divido la parola in tutte le sue lettere
  var RevertedWord = SplittedWord.reverse();//Inverto l'ordine delle singole lettere
  var JoinedWord = RevertedWord.join();     //Unifico le lettere per formare la parola
  return JoinedWord;
}
console.log(JoinedWord);
// Confronto la parola iniziale con il suo contrario


// Fornisco l'esito del confronto
