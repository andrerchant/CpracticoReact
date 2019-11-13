import React, {useState,useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CarouselList from '../components/CarouselList';
import Carousel from '../components/carousel/Carousel';
import CarouselItem from '../components/carousel/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    //start: json-server --watch initialState.json -q &&
    
    const initialState = useInitialState(API);
    console.log(initialState);

    return initialState.length === 0 ? <h1>L O A D I N G . . .</h1> : (
        <div className="App">
            <Header />
            <Search />

            {
                initialState.mylist.length > 0 &&
                <CarouselList title="Mi lista">
                    <Carousel>
                        {
                            initialState.mylist.map( item =>
                                <CarouselItem key={item.id}{...item} />
                            )
                        }
                    </Carousel>
                </CarouselList>
            }


            <CarouselList title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map( item =>
                            <CarouselItem key={item.id}{...item} />
                        )
                    }
                </Carousel>
            </CarouselList>

            <CarouselList title="Originales">
                <Carousel>
                    {
                        initialState.originals.map( item =>
                            <CarouselItem key={item.id}{...item} />
                        )
                    }
                </Carousel>
            </CarouselList>

            <Footer />
        </div>
    );
}

export default App;