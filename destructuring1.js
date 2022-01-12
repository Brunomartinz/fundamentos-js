const pessoa = {
  nome: "Bruno",
  idade: 24,
  endereco: {
    logradouro: "rua ABC",
    numero: 203,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

//outra forma podemos dar novos nomes para as variaveis que arrancamos do objeto
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// se não tiver os atributos dentro desse objeto ele assume que tem .
const { sobrenome, bemHumorado = true } = pessoa;
console.log(sobrenome, bemHumorado);

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);
