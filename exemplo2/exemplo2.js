var nome = "Caio";
var idade = 20;
var ativo = false;
var qualquer = 20; // Diferentes tipos que pode ser declarada
qualquer = "Aqui é um texto";
qualquer = true;
console.log("Nome " + nome);
console.log("Idade " + idade);
console.log("Ativo " + ativo);
console.log("qualquer " + qualquer);
var aluno1 = {
    nome: "Denis",
    idade: 19,
    rg: "12.456.789-x"
};
var texto = "Nome: ".concat(aluno1.nome, "\nIdade: ").concat(aluno1.idade, "\nRG: ").concat(aluno1.rg);
console.log(texto);
