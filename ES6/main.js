const usuario = {
    nome: 'leonardo',
    idade: 22,
    endereco: {
        cidade: 'Rio Grande do Sul',
        estado: 'RS',
    },
};

const  { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
