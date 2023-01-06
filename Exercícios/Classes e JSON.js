/*
EXEMPLO JSON
{
  "nome": "thiago",
  "nascimento": "17/07/2002",
  "linguagens": "[Java, Python, PHP]",
  "trabalhoDesde": "2020"
}
*/

class Programador {
  constructor(nome, nascimento, linguadens = [], trabalhoDesde = null) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.linguagens = linguadens;
    this.trabalhoDesde = trabalhoDesde;
  }
}

const thiago = new Programador(
  'Thiago',
  '17/07/2002',
  ['JavaScript', 'Java', 'Python'],
  2020
);

const thiago2 = new Programador(
  'Thiago2',
  '18/08/2003',
  ['PHP', 'C', 'Ruby'],
  2021
);

for (const dados in thiago2) {
  console.log(`${dados}: ${thiago2[dados]}`);
  //ou console.log(dados + ':' + thiago2[dados]);
}

/*
console.table(thiago);
console.table(thiago2);
*/
