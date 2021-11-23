import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ vaga.tipo }</h5>
          <span className="badge bg-primary">{ vaga.localizacao }</span>
          <span className="badge bg-light text-dark">R$ { vaga.valor }</span>
          <img src="vaga.imagemUrl" className="badge bg-light text-dark"></img>
        </div>
      </div>
    </Link>
  )
}

export default Card
