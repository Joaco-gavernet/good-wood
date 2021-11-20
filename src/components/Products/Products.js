import React from "react";
import "./Products.scss";
import avion from './avion.png';
import autito from './autito.png';
import camionpista from './camionpista.png';
import camion from './camionacoplado.png';

const products = {
  camion: {
    title: 'Camión con acoplado + pista',
    description: '12 lápices + pista para colorear de 90x100 cm.\nHecho con madera y rulemanes\n100% handmade\nMedidas: 24 x 4 cm.',
    image: camion,
  },
  camionYpista: {
    title: 'Camión con acoplado',
    description: 'Hecho con madera y rulemanes\n100% handmade\nMedidas: 30 x 5 cm.',
    image: camionpista,
  },
  autito: {
    title: 'Autito con casa rodante',
    description: 'Hecho con madera y rulemanes\n100% handmade\nMedidas: 8 x 4,5 cm. / con casa rodante: 14 x 4,5 cm.',
    image: autito,
  },
  avion: {
    title: 'Avión',
    description: 'Hecho con madera y rulemanes\n100% handmade\nMedidas: 25 x 20 cm.',
    image: avion,
  }
};

const Products = () => {
  return (
    <div className="products__wrapper" id="products">
      <div className="products__title">Productos</div>
      <div className="products">
        {Object.entries(products).map(([productName, productData], key) => (
          <div className="product" key={key}>
            <img src={productData.image} alt={productData.title} className="product__img"></img>
            <div className="product__text">
              <p className="product__title">{productData.title}</p>
              <div className="product__description">
                {productData.description.split('\n').map((paragraph, key) => <p key={key}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default Products;
