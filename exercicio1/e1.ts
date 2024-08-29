interface Produto {
    codigo: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidadeEstoque: number;
}

var iphone13: Produto = {
    codigo: 1,
    nome: "Iphone 13",
    preco: 3999,
    descricao: "Celular de última geração",
    quantidadeEstoque: 10
}

function cadastrarProduto(produto:Produto) : string {
    return `Código: ${produto.codigo} \nNome: ${produto.nome} \nPreço: ${produto.preco} \nDescrição: ${produto.descricao} \nQuantidade no estoque: ${produto.quantidadeEstoque}`;
}

console.log(cadastrarProduto(iphone13));
