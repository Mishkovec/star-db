import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
        selectedPerson: 1,
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
