class CepDTO {
  cep
  logradouro
  complement
  bairro
  localidade
  uf

  constructor(data) {
    this.cep = data.cep;
    this.logradouro = data.logradouro;
    this.complemento = data.complemento;
    this.bairro = data.bairro;
    this.localidade= data.localidade;
    this.uf = data.uf;
  }
}

module.exports = CepDTO;
