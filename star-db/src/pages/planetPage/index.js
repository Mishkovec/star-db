import React from 'react';
import ItemList from '../../components/item-list';
import PlanetDetails from '../../components/planet-details';
import PageLayout from '../pageLayout';
import ItemDetails  from '../../components/itemDetails';
import {ItemPoint} from '../../components/itemDetails';

const PlanetPage = (props) => {
    return (
        <PageLayout
            left={
                <ItemList 
                    onItemSelected={props.onItemSelected}
                    getData={props.getData}                    
                />
            }
            right={
                <ItemDetails
                    id={props.Id}
                    getData={props.getPlanet}
                    getImage={props.getImage}
                >
                    <ItemPoint label={'Population'} value={'population'}/>
                    <ItemPoint label={'Rotetion Period'} value={'rotationPeriod'}/>
                    <ItemPoint label={'Diameter'} value={'diameter'}/>
                </ItemDetails>
            }
        />            
    )
};
export default PlanetPage;
