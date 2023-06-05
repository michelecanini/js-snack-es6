"use strict";

//PROBLEMA: Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore utilizzando destructuring e template literal.

const racingBike = [
    {
        bike_name: 'AEROAD CFR',
        bike_weigth: 8,
    },
    {
        bike_name: 'VAN RYSEL',
        bike_weigth: 9,
    },
    {
        bike_name: 'TRIBAN DONNA',
        bike_weigth: 7,
    },
    {
        bike_name: 'BTWIN',
        bike_weigth: 10,
    },
    {
        bike_name: 'LOBITO CARBONIO',
        bike_weigth: 6,
    },
]        
console.log(racingBike)
console.log(racingBike[4].bike_name)
console.log(racingBike[4].bike_weigth)

//DESTRUCTURING + TEMPLATE LITERAL

let newArray = [];

//for(let i=0; i<racingBike.length; i++){
//    console.log(racingBike[4])
//}