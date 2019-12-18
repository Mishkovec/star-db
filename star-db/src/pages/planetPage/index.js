import React from 'react';
import ItemList from '../../components/item-list';
import PlanetDetails from '../../components/planet-details';
import PageLayout from '../pageLayout';

const PlanetPage = (props) => {
        return (
            <PageLayout
                left={
                    <ItemList 
                        onItemSelected={props.onItemSelected}
                        getData={props.getData}                    
                    />
                }
                right={<PlanetDetails Id={props.Id}/>}
            />
        )
};
export default PlanetPage;
