# JS-SNACK-ES6

### PROBLEMA SNACK 1
#### Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

 `[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']`

 #### Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato. Generiamo e stampiamo in console la lista per i segnaposto.

    1. dichiarazione delle variabili
    2. creazione dell'array
    3. inserimento nell'array come oggetti degli invitati
    4. inserimento degli attributi, nome del tavolo, nome ospite e posto occupato
    5. creare un ciclo forEach
    6. generare e stampare in console la lista per i segnaposto

### PROBLEMA SNACK 2
#### Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...  1.Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ES (Marco della Rovere => MARCO DELLA ROVERE); 2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 3.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120, Questo è l'elenco degli studenti:

Id  | Name                  | Grades
--- | --------------------- | -----
213 | Marco della Rovere    | 78
110 | Paola Cortellessa     | 96
250 | Andrea Mantegna 	    | 48
145 | Gaia Borromini        | 74
196 | Luigi Grimaldello     | 68
102 | Piero della Francesca | 50
120 | Francesca da Polenta  | 84

    1. dichiarazione delle variabili
    2. creazione dell'array lista studenti con i dati della tabella
    3. crea un nuovo array con map per la lista in maiuscolo
    4. crea un nuovo array con filter per la lista dei voti superiori a 70
    5. controllo dei valori con if
    6. ? SE i voti dello studente sono superiori a 70
        6.1 stampa a video il nome dello studente
    7. : ALTRIMENTI vai avanti
    8. crea un nuovo array con filter per la lista con voti superiori a 70 e id superiore a 120
    9. ? SE i voti dello studente sono superiori a 70 e lo studente ha un id superiore a 120
        9.1 stampa a video il nome dello studente
    10. : ALTRIMENTI vai avanti
    11. generare e stampare in console le liste

### PROBLEMA SNACK 3

#### Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
`nome` e `peso`. 
### Stampare in console la bici con peso minore utilizzando destructuring e template literal
    1. creare l'array di oggetti
    2. inserire oggetti "bici da corsa" con nome e peso
    3. recuperare i valori della bici piu leggera
    3. stampare in console.log la bici con peso minore con destructuring e template literal

### PROBLEMA SNACK 4

#### Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
`nome`,`punti fatti`,`falli subiti`. 
#### `Nome` sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: 
`punti fatti` e `falli subiti`. 
#### Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    1. creare l'array di oggetti
    2. inserire oggetti "squadre di calcio" con nome, punti fatti, falli subiti 
    3. nome è l'unica proprietà inserita diversa da 0 per gli altri avvicinarsi a dati reali
    4. creare numeri random da inserire nelle proprietà punti fatti e falli subiti
    5. creare un nuovo array che continene solo nomi e falli subiti
    6. stampare il nuovo array in console.log