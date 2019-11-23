import React from 'react';
import './app.css';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        )
    }
};