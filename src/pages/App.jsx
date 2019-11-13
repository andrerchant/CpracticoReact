import React, {useState,useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CarouselList from '../components/CarouselList';
import Carousel from '../components/carousel/Carousel';
import CarouselItem from '../components/carousel/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
    const [ videos , setVideos ] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/initalState')
            .then( response => response.json() )
            .then( data => setVideos(data) );

    }, []);
    //start: json-server --watch initialState.json -q &&

    console.log(videos);

    return(
        <div className="App">
            <Header />
            <Search />

            <CarouselList title="Mi lista">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </CarouselList>

            <CarouselList title="Tendencias">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </CarouselList>

            <CarouselList title="Originales">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </CarouselList>

            <Footer />
        </div>
    );
}

export default App;