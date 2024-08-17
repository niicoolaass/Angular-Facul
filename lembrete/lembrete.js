var gustavo = {
    ra: 123,
    nome: "Gustavo"
};
function cadastro(aluno) {
    return "RA: ".concat(aluno.ra, " \nNome: ").concat(aluno.nome);
}
console.log(cadastro(gustavo));
