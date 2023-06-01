"use stript";

// PROBLEMA: SNACK 2
//Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
//1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
//ES (Marco della Rovere => MARCO DELLA ROVERE);
//2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
//3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
//Questo è l'elenco degli studenti:
//```
//Id  Name                Grades
//213 Marco della Rovere      78
//110 Paola Cortellessa       96
//250 Andrea Mantegna 	    48
//145 Gaia Borromini          74
//196 Luigi Grimaldello 	    68
//102 Piero della Francesca   50
//120 Francesca da Polenta    84


// DICHIARAZIONE DELLE VARIABILI

// VARIABILE DELL'ARRAY DEGLI STUDENTI CON GLI OBJECT ALL'INTERNO
let nomeMaiuscolo = [
    {
        id: '213',
        name: 'Marco della Rovere',
        grades: '78',
    },
    {
        id: '110',
        name: 'Paola Coretellessa',
        grades: '96',
    },
    {
        id: '250',
        name: 'Andrea Mantegna',
        grades: '48',
    },
    {
        id: '145',
        name: 'Gaia Borromini',
        grades: '74',
    },
]

// LOGICA DEL PROGRAMMA

// CICLO FOREACH PER LA STAMPA DELLA LISTA DEGLI STUDENTI IN MAIUSCOLO
nomeMaiuscolo.forEach((maiuscolo) => {
    console.log(`${maiuscolo.name.toUpperCase()}`)
});