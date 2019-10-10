"use strict";

var usuario = {
  nome: 'leonardo',
  idade: 22,
  endereco: {
    cidade: 'Rio Grande do Sul',
    estado: 'RS'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
