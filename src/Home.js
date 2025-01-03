import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""/>

<div className="home__row">
    <Product id ="1231341"
    title="The Lean Startup: How Constant Innovation Creates Radically successful Businesses Paperback" 
    price={450.99} image="https://www.globalorange.nl/wp-content/uploads/2022/09/booktip_lean-startup-eric-ries_NEW.png" 
    rating={4}/>

    <Product id="49538094"
    title='Kenwood kMix Stand Mixer with Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
    price={31000.99} image="https://m.media-amazon.com/images/I/310emBhITrL._SY300_SX300_QL70_FMwebp_.jpg" 
    rating={4}/>
          </div>

<div className="home__row">
<Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
    price={70000.99} image="https://m.media-amazon.com/images/I/41MNtotCCRL._SX466_.jpg" 
    rating={4}/>

<Product title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
    price={5000.99} image="https://m.media-amazon.com/images/I/71xaI+n5CSL._SX679_.jpg" 
    rating={3}/>
<Product title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
    price={33490.99} image="https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg" 
    rating={5} />
          </div>

<div className="home__row">
<Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
    price={33490.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
    rating={4} />
    <image width="300%"/>
          </div>


        </div>
    </div>
  )
}

export default Home
