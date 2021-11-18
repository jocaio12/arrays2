let lista = [
    {id:1, nome:'Bonieky', sobrenome:'Lacerda'},
    {id:2, nome:'João', sobrenome:'Bernardino'},
    {id:3, nome:'Paulo', sobrenome:'Silva'}
];

let pessoa = lista.find(function(item){
    return (item.id == 2) ? true : false;
});

let res = pessoa;


console.log(res);

/*
// findIndex, retorna a posição do item dentro do array
let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.findIndex(function(item){
    return (item == 16) ? true : false;
});

let res = lista2;
*/



/*
// find, retorna o item que eu estou procurando dentro do array
let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.find(function(item){
    return (item == 16) ? true : false;
});

let res = lista2;
/*


/*
// some, se alguns atenderem a essa condição TRUE/FALSE
let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.some(function(item){
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});

let res = lista2;
*/



/*
// every, se todos atenderem a essa condição TRUE/FALSE
let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.every(function(item){
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});

let res = lista2;
*/


/*
//filter, filtra dentro do array oq for determinado >< 20
let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.filter(function(item){
    if (item > 20) {
        return true;
    } else {
        return false;
    }
});

let res = lista2;
*/


/*
// Parecido com a função for, multiplica cada item do array por 2
ex. for(let i in lista) {
    lista2.push(lista[i] *2);
}

let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function(item) {
    return item * 2;

});

let res = lista2;
*/

