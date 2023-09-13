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

function callToPhone(phone: number | string){  //numero ou string
    return phone;
}

function addNumber(x: number, y: number): number{  //recebe dois parametros tipo number e retorna number
    return x + y
}
let soma:number = addNumber(4,7);


 