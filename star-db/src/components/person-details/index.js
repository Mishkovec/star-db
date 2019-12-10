import React from 'react';
import './person-setails.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();
    
    state = {
        person: []
    };
    
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if(this.props.personId!==prevProps.personId) {
            this.updatePerson(); 
        }
        console.log(this.state.person)
    }
    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapiService.getPerson(personId)
        .then((person)=>{
            this.setState({
                person
            });
        });
    }
    render() {
        if (!this.state.person) {
            return <span>Select a person from the list</span>
        }

        const {person: {
            id, name, gender, birthYear, eyeColor
        }} = this.state;
        return (
            <div className='person-details card'>
                <img className='person-image'/>
                <div className='card-body'>
                    <img
                        className='person-image'
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    />
                    <div className='info-card'>
                        <h4>{name}</h4>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <span className='term'>Gender </span>
                                <span>{gender}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Birth year </span>
                                <span>{birthYear}</span>                        
                            </li>
                            <li className='list-group-item'>
                                <span className='term'>Eye Color </span>
                                <span>{eyeColor}</span>                        
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};
