"use strict";
//Variaveis
//tipos primitivos: boolean, number, string
let ligado = false; //colocar ":" na variavel interpreta como uma "trava" para o parametro
let nome = "Renan";
let idade = 30;
let altura = 1.9; //variaveis tipo number também aceita numeros decimais.
//exemplos abaixo sem o simbolo ":"
let ligado2 = false; //Também é considerado tipo boolean
let nome2 = "Renan";
let idade2 = 20;
//Tipos especiais utilizados para estrategia de desenvolvimento
//null
//indefined
let nulo = null; //Só pode receber como parametro nulo
let indefinido = undefined; //Só pode receber como parametro undefined
//Tipos abrangentes
//void
let retorno;
function executaQuery() {
    //Funcao que retorna vazio 
}
//any
let retornoView = ""; //Utilizado para funções que não retornam um valor previsivel.
//objeto sem previsibilidade
let produto = {
    name: "Azevedo",
    cidade: "SP",
    idade: "21",
}; //Utilizado as chaves para a passagem do objeto
let meuProduto = {
    nome: "Tenis",
    preco: 0,
    unidades: 0
};
//arrays
let dados = ["Azevedo", "Oliveira"];
//ou
let dados2 = [];
let infos = []; //vetor que armazena dois tipos de conteudos diferentes
//Tuplas
let boleto = ["agua conta", 199.90, 123123];
//arrays metodos
dados.pop();
//Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
