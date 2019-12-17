import React from 'react';
// import './personPage.css';
import ItemList from '../../components/item-list';
import StarshipDetails from '../../components/starship-details';

const StarshipPage = (props) => {
        return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList 
                        onItemSelected={props.onItemSelected}
                        getData={props.getData}
                    />
                </div>
                <div className='col-md-6'>
                    <StarshipDetails Id={props.Id}/>
                </div>
            </div>
        )
};
export default StarshipPage;