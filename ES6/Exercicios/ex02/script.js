const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 22, empresa: 'Rocketseat' },
    { nome: 'Pipi', idade: 19, empresa: 'Rocketseat' },
]

// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
let contemIdades = usuarios.map(item => item.idade)
console.log(contemIdades);

//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
let checaEmpresaeIdade = usuarios.filter(({idade, empresa, nome}) => {
    if(idade > 18 && empresa == 'Rocketseat') {
        console.log(nome);
    }
});

//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
let buscaUsuario = usuarios.find(usuario => { return usuario.empresa === 'Google' })
console.log(buscaUsuario);

//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:
usuarios
  .map(({nome, idade, empresa}) => { return {nome, idade: idade * 2, empresa} })
  .filter(usuario => usuario.idade <= 50)
