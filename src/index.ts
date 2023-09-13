//Variaveis


//tipos primitivos: boolean, number, string
let ligado:boolean = false; //colocar ":" na variavel interpreta como uma "trava" para o parametro
let nome:string = "Renan";
let idade:number = 30;
let altura:number = 1.9;  //variaveis tipo number também aceita numeros decimais.

//exemplos abaixo sem o simbolo ":"
let ligado2 = false; //Também é considerado tipo boolean
let nome2 = "Renan"
let idade2 = 20;


//Tipos especiais utilizados para estrategia de desenvolvimento
//null
//indefined
let nulo:null = null; //Só pode receber como parametro nulo
let indefinido:undefined = undefined; //Só pode receber como parametro undefined

//Tipos abrangentes

//void
let retorno:void;

function executaQuery(): void{
    //Funcao que retorna vazio 
}
 
//any
let retornoView:any = "" //Utilizado para funções que não retornam um valor previsivel.

//objeto sem previsibilidade
let produto:object = {
    name: "Azevedo",
    cidade: "SP",
    idade: "21",
};                      //Utilizado as chaves para a passagem do objeto

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
}     //struct                     

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 0,
    unidades: 0
}

//arrays

let dados: string[] = ["Azevedo", "Oliveira"];
//ou
let dados2: Array<string> = [];

let infos: (string | number)[] = []; //vetor que armazena dois tipos de conteudos diferentes


//Tuplas

let boleto:[string,number,number] = ["agua conta" , 199.90, 123123];

//arrays metodos

dados.pop();

//Datas

let aniversario:Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString());

//funções 

function addToHello(name: string){
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string{  //numero ou string
    return phone;
}

function addNumber(x: number, y: number): number{  //recebe dois parametros tipo number e retorna number
    return x + y
}
let soma:number = addNumber(4,7);

 //Função assincrona
async function getDatabase(id:number): Promise<string> {
    return "Azevedo";
}

//Interfaces

type robot = {    //type: utilizado para tipar
    id:number,    //interface: utilizado para tipar variaveis especificas, interpretar como se fosse um contrato
    name:string,
};

interface robot2{
    id:number,
    name:string,
}

const bot: robot = {
    id: 1,
    name: "Robo"
}

//classes
class Personagem{
    name?: string;
    strength: number;
    skill: number;

    constructor(name:string, strenght:number, skill:number){
         //o "this" faz referencia a classe Personagem, logo atribuindo o name da classe para name
        this.strength = strenght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strength} points`)
    }
}


    const p1 = new Personagem("Azevedo",10, 98);
    p1.attack();

//data modifiers
//Public, private e protected

//subclasses

//Personagem é a superclasse
//Magician é uma subclasse
class Magician extends Personagem{
    constructor(name: string, strength:number, skill:number){
    super(name,strength,skill) //passar os parametros da superclasse
    }
}

//generics
function concatArray<T>(...itens: T[]):T[]{ // "T" para definir o tipo do parametro (linha 152 e 153)
    return new Array().concat(...itens);
}

const stgArray = concatArray<string[]>(["Azevedo, Oliveira"],["Santos"])   //Tipo string
const numArray = concatArray<number[]>([1, 5], [3]);                       //Tipo number
console.log(numArray);

//decorators

function exibirNome(target: any){
    console.log(target);
}

@exibirNome
class Funcionario {

}

@exibirNome
class Quincas {}


function apiVersion(version:string){
    return(target: any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

function minLenght(lenght:number){
    return(target:any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length< lenght) {
                throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value
            }
        };

        Object.defineProperty(target, key,{
        get: getter,
        set: setter,
         });
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();
//console.log(api); //api.__version

//attribute decorator

class Api2 {
    @minLenght(3)
    name:string;
    
    constructor(name:string){
        this.name = name;
    };
}

const api2 = new Api2("produtos");
console.log(api2.name);


