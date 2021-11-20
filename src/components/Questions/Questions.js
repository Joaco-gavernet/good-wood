import React from "react";
import Information from '../Information/Information';
import "./Questions.scss";


const Questions = () => {
  return (
    <div className="questions" id='questions'>
      <div className="question">
        <p className="question__title">Preguntas frecuentes</p>
        <div className="question__text">
          <div className="question__text--block">
            <p className="question__paragraph"><strong>¿Para que edad se recomienda Goodwood?</strong><br></br>
              Nuestros juguetes están diseñados para niños de entre 2 y 10 años.</p>

            <p className="question__paragraph"><strong>¿Cuál es el costo de envío?</strong><br></br>
              El costo de envío varía según el total de la compra y tu ubicación.</p>

            <p className="question__paragraph"><strong>¿Dónde puedo recibir mi pedido?</strong><br></br>
              Realizamos envíos a todo el país.</p>
          </div>

          <div className="question__text--block">
            <p className="question__paragraph"><strong>¿Para que edad se recomienda Goodwood?</strong><br></br>
              Nuestros juguetes están diseñados para niños de entre 2 y 10 años.</p>

            <p className="question__paragraph"><strong>¿Cuál es el costo de envío?</strong><br></br>
              El costo de envío varía según el total de la compra y tu ubicación.</p>

            <p className="question__paragraph"><strong>¿Dónde puedo recibir mi pedido?</strong><br></br>
              Realizamos envíos a todo el país.</p>
          </div>
        </div>
      </div>
      <div className="question__info">
        <Information />
      </div>
    </div>
  );
};

export default Questions;
