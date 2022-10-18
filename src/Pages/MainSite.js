import React, {Component} from 'react';
import Header from '../Components/Header and Footer/Header'
import WelcomeComponent from '../Components/MainSite/WelcomeComponent.js';
import PopularProducts from '../Components/MainSite/PopularProducts.js';

function MainSite(){

    return (
        <div className="mainSite">
            <Header/>
            <WelcomeComponent/>
            <PopularProducts/>
        </div>        
    );
  
}

export default MainSite;
