import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const tipo = evento.target.tipo.value; 
    const localizacao = evento.target.localizacao.value;
    const valor = evento.target.valor.value;
    const imagemUrl = evento.target.imagemUrl.value;

    const vaga = {
      tipo,
      localizacao,
      valor:parseInt(valor),
      imagemUrl
    }
    
    try {
      const response = await Api.fetchPost(vaga)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Imóveis</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="tipo" id="floatingInput" placeholder="Digite o Tipo"/>
                  <label htmlFor="floatingInput">Tipo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="localizacao" id="floatingsalario" placeholder="Digite a Localização"/>
                  <label htmlFor="floatingsalario">Localização</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="valor" id="floatingInput" placeholder="Digite o valor"/>
                  <label htmlFor="floatingInput">Valor</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="imagemUrl" id="floatingsenioridade" placeholder="Digite a URL"/>
                  <label htmlFor="floatingsenioridade">URL</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
