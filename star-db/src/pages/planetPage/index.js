import React from 'react';
// import './personPage.css';
import ItemList from '../../components/item-list';
import PersonDetails from '../../components/person-details';

const PlanetPage = (props) => {
        return (
            <div className='row mb2'>
                PlanetPage
                <div className='col-md-6'>
                    <ItemList onItemSelected={props.onItemSelected}/>
                </div>
                <div className='col-md-6'>
                    <PersonDetails personId={props.personId}/>
                </div>
            </div>
        )
};
export default PlanetPage;
