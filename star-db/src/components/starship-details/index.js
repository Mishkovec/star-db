import React from 'react';
// import './planet-details.css';
import SwapiService from '../../services/swapi-service';

export default class StarShipDetails extends React.Component {
    swapiService = new SwapiService();
    
    state = {
        starship: []
    };
    
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if(this.props.Id!==prevProps.Id) {
            this.updatePerson(); 
        }
        console.log(this.state.starship)
    }
    updatePerson() {
        const {Id} = this.props;
        if (!Id) {
            return;
        }
        this.swapiService.getStarship(Id)
        .then((starship)=>{
            this.setState({
                starship
            });
        });
    }
    render() {
        if (!this.state.starship) {
            return <span>Select a starship from the list</span>
        }
       
        const {starship: {
            id, name, model, manufacturer, costInCredits, length, crew, passenders, cargoCapacity
        }} = this.state;
        return (
            <div className='person-details card'>
                <img className='person-image'/>
                <div className='card-body'>
                    <img
                        className='person-image'
                        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                    />
                    <div className='info-card'>
                        <h4>{name}</h4>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <span className='term'>Model </span>
                                <span>{model}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Manufacturer </span>
                                <span>{manufacturer}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Cost in credits </span>
                                <span>{costInCredits}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Length </span>
                                <span>{length}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Crew </span>
                                <span>{crew}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Passengers </span>
                                <span>{passenders}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Capasity </span>
                                <span>{cargoCapacity}</span>                        
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};
