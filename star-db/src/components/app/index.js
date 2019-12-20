import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './app.css';
import SwapiService from '../../services/swapi-service';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import ItemDetails  from '../itemDetails';
import {ItemPoint} from '../itemDetails';
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage,
    PageLayout
} from '../../pages';

export default class App extends React.Component {
    swapiService = new SwapiService();

    state = {
        showPlanet: true,
        selectedPerson: null,
        selectedPlanet: null,
        selectedStarship: null,
        isLoggedIn: false

    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson:id            
        })
        console.log(this.state.selectedPerson)
    }
    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet:id            
        })
        console.log(this.state.selectedPlanet)
    }
    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship:id            
        })
        console.log(this.state.selectedStarship)
    }
    
    render() {
        const {isLoggedIn} = this.state;
        return (
            <Router>
                <div>
                    <Header/>
                    <RandomPlanet/>

                    <Switch>
                        <Route path='/' render={()=><h2>Welcom to StarDB</h2>} exact/>
                        <Route path='/people' exact>
                            <PeoplePage
                                onItemSelected={this.onPersonSelected}
                                personId={this.state.selectedPerson}
                                getData={this.swapiService.getAllPeople}
                            />
                        </Route>
                        <Route path='/people/:id' render={({match, location, history})=>{
                            const {id} = match.params;
                            console.log(match, location, history);
                            return (
                                <ItemDetails
                                    id={id} 
                                    getData={this.swapiService.getPerson}
                                    getImage={this.swapiService.getPersonImage}
                                >
                                    <ItemPoint label={'Gender'} value={'gender'}/>
                                    <ItemPoint label={'Birth Year'} value={'birthYear'}/>
                                    <ItemPoint label={'Eye Color'} value={'eyeColor'}/>
                                </ItemDetails>)
                        }}/>
                        <Route path='/planets/:id?'>
                            <PlanetPage
                                onItemSelected={this.onPlanetSelected}
                                Id={this.state.selectedPlanet}
                                getData={this.swapiService.getAllPlanets}
                                getPlanet={this.swapiService.getPlanet}
                                getImage={this.swapiService.getPlanetImage}
                            />
                        </Route>
                        <Route path='/starships/:id?'>
                            <StarshipPage
                                onItemSelected={this.onStarshipSelected}
                                Id={this.state.selectedStarship}
                                getData={this.swapiService.getAllStarships}
                                getStarship={this.swapiService.getStarship}
                                getImage={this.swapiService.getStarshipImage}
                            />    
                        </Route>  
                        <Route path='/login' render = {()=>
                            <LoginPage
                                isLoggedIn={this.state.isLoggedIn}
                                onLogin={this.onLogin}
                            />}/> 
                        <Route path='/secret' render = {()=><SecretPage isLoggedIn={isLoggedIn}/>}/>
                        <Route render={()=><h2>Page not found</h2>}/>
                        {/* <Redirect to='/'/> */}
                    </Switch>          
                </div>
            </Router>
        )
    }
};
