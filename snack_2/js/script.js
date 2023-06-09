"use strict";

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
let elencoStudenti = [
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
    {
        id: '196',
        name: 'Luigi Grimaldello',
        grades: '68',
    },
    {
        id: '102',
        name: 'Piero della Francesca',
        grades: '50',
    },
    {
        id: '120',
        name: 'Francesca da Polenta',
        grades: '84',
    },
]

// LOGICA DEL PROGRAMMA

// TITOLO LISTA IN MAIUSCOLO PER LE TARGHE
console.log ('Elenco degli studenti in Maiuscolo per le targhe:')

// CICLO FOREACH PER LA STAMPA DELLA LISTA DEGLI STUDENTI IN MAIUSCOLO
elencoStudenti.forEach((maiuscolo) => {
    console.log(`${maiuscolo.name.toUpperCase()}`)
});

// TITOLO LISTA STUDENTI CON VOTO SUPERIORE A 70
console.log ('')
console.log ('Elenco degli studenti con voto superiore a 70:')

// CICLO FOREACH PER LA STAMPA DELLA LISTA DEGLI STUDENTI CON VOTO SUPERIORE A 70
elencoStudenti.forEach((voto_maggiore_70) => {
    if (voto_maggiore_70.grades > 70){
    console.log(`Lo studente ${voto_maggiore_70.name} ha ottenuto una media voti: ${voto_maggiore_70.grades} punti`)
    }else{

    }
});

// TITOLO LISTA STUDENTI CON VOTO SUPERIORE A 70 E ID SUPERIORE A 120
console.log ('')
console.log ('Elenco degli studenti con voto superiore a 70 ed id superiore a 120:')

// CICLO FOREACH PER LA STAMPA DELLA LISTA DEGLI STUDENTI CON VOTO SUPERIORE A 70 ED ID SUPERIORE A 120
elencoStudenti.forEach((voto_70_id_120) => {
    if ((voto_70_id_120.grades > 70) && (voto_70_id_120.id > 120)){
    console.log(`Lo studente ${voto_70_id_120.name} ha ottenuto una media voti: ${voto_70_id_120.grades} punti, ed ha l'identificativo: N.${voto_70_id_120.id}`)
    }else{

    }
});