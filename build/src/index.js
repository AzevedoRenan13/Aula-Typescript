"use strict";
//Variaveis
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//funções 
function addToHello(name) {
    return `Hello ${name}`;
}
function callToPhone(phone) {
    return phone;
}
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
//Função assincrona
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Azevedo";
    });
}
const bot = {
    id: 1,
    name: "Robo"
};
//classes
class Personagem {
    constructor(name, strenght, skill) {
        //o "this" faz referencia a classe Personagem, logo atribuindo o name da classe para name
        this.strength = strenght;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Personagem("Azevedo", 10, 98);
p1.attack();
//data modifiers
//Public, private e protected
//subclasses
//Personagem é a superclasse
//Magician é uma subclasse
class Magician extends Personagem {
    constructor(name, strength, skill) {
        super(name, strength, skill); //passar os parametros da superclasse
    }
}
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const stgArray = concatArray(["Azevedo, Oliveira"], ["Santos"]); //Tipo string
const numArray = concatArray([1, 5], [3]); //Tipo number
console.log(numArray);
//decorators
function exibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    exibirNome
], Funcionario);
let Quincas = class Quincas {
};
Quincas = __decorate([
    exibirNome
], Quincas);
