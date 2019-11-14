import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import CarouselList from '../components/CarouselList';
import Carousel from '../components/carousel/Carousel';
import CarouselItem from '../components/carousel/CarouselItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';


const Home = ({ myList, trends, originals }) => {
    return (
        <>

            <Search />

            {
                myList.length > 0 &&
                <CarouselList title="Mi lista">
                    <Carousel>
                        {
                            myList.map( item =>
                                <CarouselItem key={item.id}{...item} />
                            )
                        }
                    </Carousel>
                </CarouselList>
            }


            <CarouselList title="Tendencias">
                <Carousel>
                    {
                        trends.map( item =>
                            <CarouselItem key={item.id}{...item} />
                        )
                    }
                </Carousel>
            </CarouselList>

            <CarouselList title="Originales">
                <Carousel>
                    {
                        originals.map( item =>
                            <CarouselItem key={item.id}{...item} />
                        )
                    }
                </Carousel>
            </CarouselList>

        </>
    );
}

const mapStateToProps = state =>{
    return {
        myList : state.myList,
        trends : state.trends,
        originals : state.originals
    };
};

export default connect(mapStateToProps, null)(Home);