var iphone13 = {
    codigo: 1,
    nome: "Iphone 13",
    preco: 3999,
    descricao: "Celular de última geração",
    quantidadeEstoque: 10
};
function cadastrarProduto(produto) {
    return "C\u00F3digo: ".concat(produto.codigo, " \nNome: ").concat(produto.nome, " \nPre\u00E7o: ").concat(produto.preco, " \nDescri\u00E7\u00E3o: ").concat(produto.descricao, " \nQuantidade no estoque: ").concat(produto.quantidadeEstoque);
}
console.log(cadastrarProduto(iphone13));
