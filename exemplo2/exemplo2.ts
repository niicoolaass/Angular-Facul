interface Pessoa {
    nome: string;
    idade: number;
    rg: string;
}

var nome:string = "Caio";
var idade:number = 20;
var ativo:boolean = false;

var qualquer:any = 20; // Diferentes tipos que pode ser declarada
qualquer = "Aqui é um texto";
qualquer = true;

console.log("Nome " + nome);
console.log("Idade " + idade);
console.log("Ativo " + ativo);
console.log("qualquer " + qualquer);


var aluno1:Pessoa = {
    nome: "Denis" , 
    idade:19 ,
    rg: "12.456.789-x"
}

var texto:string = `Nome: ${aluno1.nome}
Idade: ${aluno1.idade}
RG: ${aluno1.rg}` ;

console.log(texto);