import React from "react";

import "./Products.scss";

import avion from '../Products/avion.png'
import avion2 from '../Products/avion-02.png'
import camionpista from '../Products/camionpista.png'
import camionpista2 from '../Products/camionpista-02.png'
import camionpista3 from '../Products/camionpista-03.png'
import camionpista4 from '../Products/camionpista-04.png'
import camion from '../Products/camionacoplado.png'
import camion2 from '../Products/camionacoplado-02.png'
import autito from '../Products/autito.png'
import autito2 from '../Products/autito-02.png'
import autito3 from '../Products/autito-03.png'
import autito4 from '../Products/autito-04.png'


// SWIPER IMPLEMENTATION ----------------------------
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Pagination } from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
// END SWIPER IMPLEMENTATION ----------------------------



const products = {
  camion: {
    title: 'Camión con acoplado + pista',
    description: '12 lápices + pista para colorear de 90x100 cm.\nHecho con madera y rulemanes\n100% handmade\nMedidas: 24 x 4 cm.',
    images: [
      camionpista,
      camionpista2,
      camionpista3,
      camionpista4
    ],
  },
  camionYpista: {
    title: 'Camión con acoplado',
    description: 'Hecho con madera y rulemanes\n100% handmade\nMedidas: 30 x 5 cm.',
    images: [
      camion,
      camion2
    ],
  },
  autito: {
    title: 'Autito con casa rodante',
    description: 'Hecho con madera y rulemanes\n100% handmade\nMedidas: 8 x 4,5 cm. / con casa rodante: 14 x 4,5 cm.',
    images: [
      autito,
      autito2,
      autito3,
      autito4
    ],
  },
  avion: {
    title: 'Avión',
    description: 'Hecho con madera y rulemanes\n100% handmade\nMedidas: 25 x 20 cm.',
    images: [
      avion,
      avion2
    ],
  }
};

const Products = () => {
  return (
    <div className="products__wrapper" id="products">
      <div className="products__title">Productos</div>
      <div className="products">
        {
          Object.entries(products).map(([productName, productData]) => (
            <div className="product" key={productName}>
              <div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={true}
                >
                  {
                    productData.images.map(img => (
                      <SwiperSlide>
                        {console.log('example', img)}
                        <img src={img} alt={productData.title} className="product__img"></img>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              <div className="product__text">
                <p className="product__title">{productData.title}</p>
                <div className="product__description">
                  {productData.description.split('\n').map((paragraph, key) => <p key={key}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  );
};

export default Products;


