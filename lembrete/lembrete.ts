interface Aluno {
    ra: number ,
    nome:string
}

var gustavo: Aluno = {
    ra: 123 ,
    nome: "Gustavo"
}

function cadastro(aluno:Aluno) : string {
    return `RA: ${aluno.ra} \nNome: ${aluno.nome}`;
}

console.log(cadastro(gustavo));

