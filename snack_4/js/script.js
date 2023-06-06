"use strict";

// PROBLEMA: Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// ARRAY PER DATI RANDOM LEGA SERIE A

const legaSerieA = [
    {
        nome: 'Napoli',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Lazio',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Atalanta',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Roma',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Fiorentina',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Bologna',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Torino',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Monza',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Udinese',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Sassuolo',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Empoli',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Salernitana',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Lecce',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Spezia',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Verona',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Cremonese',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Sampdoria',
        punti_fatti: 0,
        falli_subiti: 0,
    },
]        
console.log(legaSerieA)

legaSerieA.forEach((element) => {
    element.punti_fatti = Math.floor(Math.random() * 99) + 1;
    element.falli_subiti = Math.floor(Math.random() * 14) + 1;
});

// DATI REALI LEGA SERIE A
/*
const legaSerieA = [
    {
        nome: 'Napoli',
        punti_fatti: 90,
        falli_subiti: 12.3,
    },
    {
        nome: 'Lazio',
        punti_fatti: 74,
        falli_subiti: 12.4,
    },
    {
        nome: 'Inter',
        punti_fatti: 72,
        falli_subiti: 10.7,
    },
    {
        nome: 'Milan',
        punti_fatti: 70,
        falli_subiti: 11.5,
    },
    {
        nome: 'Atalanta',
        punti_fatti: 64,
        falli_subiti: 10.1,
    },
    {
        nome: 'Roma',
        punti_fatti: 63,
        falli_subiti: 13.3,
    },
    {
        nome: 'Juventus',
        punti_fatti: 62,
        falli_subiti: 10.8,
    },
    {
        nome: 'Fiorentina',
        punti_fatti: 56,
        falli_subiti: 13.4,
    },
    {
        nome: 'Bologna',
        punti_fatti: 54,
        falli_subiti: 11.2,
    },
    {
        nome: 'Torino',
        punti_fatti: 53,
        falli_subiti: 10.1,
    },
    {
        nome: 'Monza',
        punti_fatti: 52,
        falli_subiti: 13,
    },
    {
        nome: 'Udinese',
        punti_fatti: 46,
        falli_subiti: 12.5,
    },
    {
        nome: 'Sassuolo',
        punti_fatti: 45,
        falli_subiti: 11.7,
    },
    {
        nome: 'Empoli',
        punti_fatti: 43,
        falli_subiti: 12.1,
    },
    {
        nome: 'Salernitana',
        punti_fatti: 42,
        falli_subiti: 11.6,
    },
    {
        nome: 'Lecce',
        punti_fatti: 36,
        falli_subiti: 11.6,
    },
    {
        nome: 'Spezia',
        punti_fatti: 31,
        falli_subiti: 10,
    },
    {
        nome: 'Verona',
        punti_fatti: 31,
        falli_subiti: 10.1,
    },
    {
        nome: 'Cremonese',
        punti_fatti: 27,
        falli_subiti: 10.7,
    },
    {
        nome: 'Sampdoria',
        punti_fatti: 19,
        falli_subiti: 13.5,
    },
]        
console.log(legaSerieA)
*/