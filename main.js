
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.

//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// X COMPUTER
// 1. creo funzione per generare numeri casuali da 1 a 100
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  // 1.2 creo ciclo for per stabilire quanti numeri dovranno essere generati (16) e non dovranno essere ripetuti più volte
  const numbers = [];
  while (numbers.length < 16) { 
      // ciclo while per evitare che vengano estratti meno di 16 numeri
      let sixteenNum = randomNumbers(1,100);
      // proprietà includes per evitare che venga generato lo stesso numero
      if (!numbers.includes(sixteenNum)){
        numbers.push(sixteenNum);
      }
  }
  console.log(numbers);

// X UTENTE
// 2. Chiedere all'utente di inserire un numero alla volta per 84 volte (ciclo do while) questi numeri dovranno essere generati sempre compresi fra 1 e 100
    let userNum = [];
    do {
    let numChoice = prompt("Inserisci un numero compreso fra 1 e 100");
    console.log(numChoice);
    // 2.1 i numeri vengono inseriti all'interno dell'array
    if (!userNum.includes(numChoice)){
        userNum.push(numChoice);
    } else if (!numbers.includes(userNum)) {
        alert("HAI PERSO!!")
    } else {
        // 2.2 alert per numero uguale inserito
        alert("Si prega di non inseire 2 volte lo stesso numero")
    }
    } while (userNum.length < 2)
    console.log(userNum)

    if (userNum.length < 2) {
        alert("HAI VINTO!!!!")
    }
    // 3. alert per gioco finito a causa del numero presente in quelli genrati dal comp.
