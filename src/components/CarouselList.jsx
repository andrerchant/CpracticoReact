import React from 'react';

import '../assets/styles/components/CarouselList.scss';

const CarouselList = ({ children, title }) =>{
    return(
        <React.Fragment>    
            <div className="categories">
                <h3 className="categories__title">{title}</h3>
                {children}
            </div>
        </React.Fragment>
    );
}

export default CarouselList;