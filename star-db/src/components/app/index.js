import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import PeoplePage from '../../pages/peoplePage';
import PlanetPage from '../../pages/planetPage';
import StarshipPage from '../../pages/starshipPage';


export default class App extends React.Component {
    state = {
        showPlanet: true,
        selectedPerson: 1
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson:id            
        })
        console.log(this.state.selectedPerson)
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <RandomPlanet/>

                    <Route path='/people'>
                        <PeoplePage
                            onItemSelected={this.onPersonSelected}
                            personId={this.state.selectedPerson}
                        />
                    </Route>
                    <Route path='/planets'>
                        <PlanetPage
                            onItemSelected={this.onPersonSelected}
                            personId={this.state.selectedPerson}
                        />
                    </Route>
                    <Route path='/starships'>
                        <StarshipPage
                            onItemSelected={this.onPersonSelected}
                            personId={this.state.selectedPerson}
                        />    
                    </Route>            
                </div>
            </Router>
        )
    }
};
