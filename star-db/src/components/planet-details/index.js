import React from 'react';
import styles from './planet-details.module.css';
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
            <div className={styles.card}>
                <div className={styles.card_body}>
                    <img
                        className={styles.card_image}
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    />
                    <div className={styles.info_card}>
                        <h4>{name}</h4>
                        <ul className={styles.list_group}>
                            <li className={styles.list_group_item}>
                                <span className={styles.term}>Population </span>
                                <span>{population}</span>                        
                            </li>
                            <li className={styles.list_group_item}>
                                <span className={styles.term}>Rotation Period </span>
                                <span>{rotationPeriod}</span>                        
                            </li>
                            <li className={styles.list_group_item}>
                                <span className={styles.term}>Diameter </span>
                                <span>{diameter}</span>                        
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};
