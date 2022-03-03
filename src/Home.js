import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81NxMk9hGdL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={89649341}
            title="Atlas of the heart"
            price={19.23}
            image="https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg"
            rating={5}
          />
          <Product
            id={89649342}
            title="The Real Anthony Fauci: Bill Gates, Big Pharma, and the Global War on Democracy"
            price={20.68}
            image="https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL210_SR195,210_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={67534131}
            title="Magnetic Levitating Speaker, RUIXINDA Floating Bluetooth Speakers with Led Lights"
            price={88.99}
            image="https://m.media-amazon.com/images/I/61zrYvt2dsS._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={67534132}
            title="WeMo Switch Smart Plug, Works with Alexa"
            price={120.34}
            image="https://m.media-amazon.com/images/I/511CiYEUh5L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={67534133}
            title="Cell Phone Stand with Wireless Bluetooth Speaker and Anti-Slip Base HD"
            price={90.99}
            image="https://m.media-amazon.com/images/I/71cjRhnTVtL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={49562391}
            title="T5 Mini Projector with WiFi , Portable Outdoor Projector, 1080P Home YouTube Movie Projector with Tripod Mount Bundle, Phone Projecter for iPhone, Android, Laptop, TV"
            price={120.34}
            image="https://m.media-amazon.com/images/I/61L8c82F6UL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={49562399}
            title="Amazon Essentials Men's Long-Sleeve Polar Fleece Shirt Jacket"
            price={32.8}
            image="https://m.media-amazon.com/images/I/91tr+pRBYoL._MCnd_AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id={49562396}
            title="Heathyoga Bootcut Yoga Pants for Women with Pockets High"
            price={25.37}
            image="https://m.media-amazon.com/images/I/61tYl2Oof1L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id={49562345}
            title="Womens Sweatshirts Crewneck Loose Fitting Tops For Women Long Sleeve Shirts Pullover"
            price={45.34}
            image="https://m.media-amazon.com/images/I/61reCU-pJ5L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id={49562332}
            title="GAODI Women Waist Trainer Vest Slim Corset Neoprene Sauna Tank Top Zipper Weight"
            price={19.99}
            image="https://m.media-amazon.com/images/I/71VVaHTMLaL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
