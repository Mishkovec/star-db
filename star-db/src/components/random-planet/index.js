import React from 'react';
import './random-planet.css';
import ErrorIndicator from '../ErrorIndicator';
import {Spin} from 'antd';

import SwapiService from '../../services/swapi-service';
export default class RandomPlanet extends React.Component {
    swapiService = new SwapiService();
   
    state = {
        planet:{},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2000);
    }

    // componentDidMount() {
    //     this.updatePlanet();
    //     this.interval = setInterval(this.updatePlanet, 2000);
    // }

    // componentWillUnMount() {
    //     clearInterval(this.interval)
    // }
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    }
    onError = (err)=> {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet =()=> {
        const id =Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
                // .then((planet)=>{console.log(planet)})
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }
    
    render() {

        const {planet, loading, error} = this.state;
        
        const hasdata = !(loading || error);
        return (
            <div className='random-planet jumbotron-rounded'>
                  { 
                    hasdata ?
                      <PlanetView planet={planet}/>
                      :null
                  }
                  {
                      error ?
                       <ErrorIndicator/> : null
                  }
                  {
                      loading ?
                      <Spin className={'spin'}/> : null
                  }        
            </div>
        )
    }
};


const PlanetView = ({planet}) => {
    const {id,name,population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img 
                    className='planet-image' 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
                <div>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population </span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>      
        </React.Fragment>
    )
}