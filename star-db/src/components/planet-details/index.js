import React from 'react';
// import './planet-details.css';
import SwapiService from '../../services/swapi-service';

export default class PlanetDetails extends React.Component {
    swapiService = new SwapiService();
    
    state = {
        planet: []
    };
    
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if(this.props.Id!==prevProps.Id) {
            this.updatePerson(); 
        }
        console.log(this.state.planet)
    }
    updatePerson() {
        const {Id} = this.props;
        if (!Id) {
            return;
        }
        this.swapiService.getPlanet(Id)
        .then((planet)=>{
            this.setState({
                planet
            });
        });
    }
    render() {
        if (!this.state.planet) {
            return <span>Select a planet from the list</span>
        }
        
        const {planet: {
            id, name, population, rotationPeriod, diameter
        }} = this.state;
        return (
            <div className='person-details card'>
                <img className='person-image'/>
                <div className='card-body'>
                    <img
                        className='person-image'
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    />
                    <div className='info-card'>
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
                </div>
            </div>
        )
    }
};
