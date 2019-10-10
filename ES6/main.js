const usuario = {
    nome: 'leonardo',
    idade: 22,
    funcao: 'Estagiário'
};

const  { nome, ...resto } = usuario;

console.log(nome);
console.log(resto); 
