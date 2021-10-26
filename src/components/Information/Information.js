import React from "react";
import "./Information.scss";
import ruler from './ruler.png';
import truck from './truck.png';
import whatsapp from './whatsapp.png';

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
      { Object.entries(informationItems).map(([itemName, itemData]) => (
        <div className="information-item">
          <div>
            <img src={itemData.image} alt={itemName}></img>
          </div>
          <p>{itemData.title}</p>
          <p>{itemData.subtitle}</p>
        </div>
        )
      )}
    </div>
  );
};

export default Information;
