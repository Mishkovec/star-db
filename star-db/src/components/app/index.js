import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage
} from '../../pages';

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

                    <Route path='/' render={()=><h2>Welcom to StarDB</h2>} exact/>
                    <Route path='/people' exact>
                        <PeoplePage
                            onItemSelected={this.onPersonSelected}
                            personId={this.state.selectedPerson}
                        />
                    </Route>
                    <Route path='/people/:id' render={({match, location, history})=>{
                        const {id} = match.params;
                        console.log(match, location, history);
                        return <PersonDetails personId={id}/>
                    }}/>
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
                    <Route path='/login' render = {()=><LoginPage/>}/> 
                    <Route path='/secret' render = {()=><SecretPage/>}/>          
                </div>
            </Router>
        )
    }
};
