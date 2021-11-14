import React from "react";
import ruler from './ruler.svg';
import truck from './truck.svg';
import whatsapp from './whatsapp.svg';
import "./Information.scss";

const informationItems = {
  ruler: {
    title: 'Elaboración a pedido',
    subtitle: 'Producción en 10 dias',
    image: ruler,
  },
  whatsapp: {
    title: '¿Consultas?',
    subtitle: 'Comunicate con nosotros',
    image: whatsapp,
  },
  truck: {
    title: 'Envíos',
    subtitle: 'A todo el país',
    image: truck,
  }
};

const Information = () => {

  return (
    <div className="information">
      {Object.entries(informationItems).map(([itemName, itemData]) => (
        <div className="information-item">
          <img src={itemData.image} alt={itemName} className="information__img"></img>
          <div className="information__text">
            <p>{itemData.title}</p>
            <p className="information__subtitle">{itemData.subtitle}</p>
          </div>
        </div>
      )
      )}
    </div>
  );
};

export default Information;
