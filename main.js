
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
    let userNum = [];
    let numChoice = false;
// 2. Chiedere all'utente di inserire un numero alla volta per 84 volte fra 1 e 100
    while ( numChoice === false && userNum.length < 3) {
        const userNumber = Number(prompt("Inserisci un numero compreso fra 1 e 100"));
        // 2.1 SE i numeri inseriti sono contenuti in quelli generati il numero scleto interromperà il gioco
        if ( numbers.includes(userNumber) ) {
            numChoice = true;
        // 2.2 inserisco all'interno del ciclo proprietà per non ripetere lo stesso numero
        } else if (userNum.includes(userNumber)) {
            alert("Si prega di non inserire lo stesso numero")
        // 2.3 se non si verificano le condizioni prima allora il numero viene aggiunto nella lista dell'utente
        } else {
            userNum.push(userNumber);
        }
    }
    console.log(userNum)

// 3. SE l'utente perde mostro punteggio ALTRIMENTI dichiaro il vincitore.
    if (numChoice === true) {
        alert(`Hai perso, il tuo punteggio è ${userNum.length}`);
    } else {
        alert("HAI VINTO!!!!")
    }