import React from 'react';
// import './personPage.css';
import ItemList from '../../components/item-list';
import PlanetDetails from '../../components/planet-details';

const PlanetPage = (props) => {
        return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList 
                        onItemSelected={props.onItemSelected}
                        getData={props.getData}                    
                    />
                </div>
                <div className='col-md-6'>
                    <PlanetDetails Id={props.Id}/>
                </div>
            </div>
        )
};
export default PlanetPage;
