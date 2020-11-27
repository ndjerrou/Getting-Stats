//string template litterals - ES6
// backticks : mac --> à droite du pourcentage
// backticks : windows --> alt gr + 6

// hoisting : remontée des variables avec le mot-clef var + mots-clefs function

// undefined :

// - retour inexistant d'une fonction
// - variable n'est pas initialisée

const numbers = [];

let saisie = null;
let saisieNumber = null;
let totalSaisie = 0;
let stats = ''
let somme = null;
let max = null;
let min = null;
do{
    saisie = prompt('Entrez un nombre (0 = arrêt de la saisie');
    //parsing : string --> number
    saisieNumber = parseInt(saisie)
    if(!saisieNumber){
        exit(1);
    }
    console.log(saisieNumber)

    //calculating sum
    somme += saisieNumber;

    //feeding my array
    numbers.push(saisieNumber)
    totalSaisie += 1 //unary operator
}while(saisieNumber !== 0)

numbers.pop();
totalSaisie = numbers.length;

// finding max and min
max = numbers[0];
min = numbers[0];
for (let i = 0; i < totalSaisie ; i++){
    if (max < numbers[i]){
        max = numbers[i];
    }

    if (min > numbers[i]){
        min = numbers[i]
    }
}


stats = `
Vous avez saisi ${totalSaisie} nombres
Entre ${min} et ${max}
Dont la somme totale est : ${somme}
Et la moyenne est : ${somme / totalSaisie}
`

alert(stats)





