// 'let' é para criar uma váriavel.

/*
let nome = "Mariana"; 

console.log(nome, "comprou sorvete ontem.");
console.log("Ontem,", nome, "foi ao teatro.");]
*/

//Sendo assim, as variáveis podem ser alteradas de acordo com o código, não existindo uma tipagem para elas em si!

/*
let valor; // Variável pré declarada.
valor = "Qualquer coisa kkkkk."
console.log(valor);
valor = 3;
console.log(valor);
*/

// Não conseguimos criar variáveis com palavras reservadas, por exemplo: "if", "while", etc.

/*
let if;
*/

// É sempre recomendado, criar variáveis com nomes significativos.

/*
let nomeCliente = "Gustavo";
let saldoCliente = 130.32;

console.log(nomeCliente, "- R$" + saldoCliente)
*/

// Os nomes das variáveis não podem começar com um número

/*
let 4banco;
*/

// Também não pode conter espaços ou traços nos nomes.

/*
let ola mundo;
*/

// É recomendado utilizar camelCase nos nomes das variáveis.

/*
let testeDeCamelCase = "sempreEscreverDessaForma";
console.log(testeDeCamelCase);
*/

// As variáveis são case-Sensitive, ou seja, são diferentes se a letra for minúscula ou maiúscula.

/*
let testandoNomes = "Geraldo";
let testandonomes = "Otávio";
console.log(testandoNomes, testandonomes);
*/

// Não é possível redeclarar variáveis com LET

/*
let bola = 2;
let bola = 3;
console.log(bola);
*/

/*
let bola = 5;
bola = 7;
console.log(bola);
*/

// =================================================================================== //
// NUNCA UTILIZAR VAR, SEMPRE LET, caso ache que o valor da variável irá ser alterado. //
// =================================================================================== //