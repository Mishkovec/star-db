import React from 'react';
import ItemList from '../../components/item-list';
import StarshipDetails from '../../components/starship-details';
import PageLayout from '../pageLayout';
import ItemDetails  from '../../components/itemDetails';
import {ItemPoint} from '../../components/itemDetails';

const StarshipPage = (props) => {
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
                        getData={props.getData}
                        getImage={props.getImage}
                    >
                        <ItemPoint label={'Model'} value={'model'}/>
                        <ItemPoint label={'Manufacturer'} value={'manufacturer'}/>
                        <ItemPoint label={'Cost in Credits'} value={'costInCredits'}/>
                        <ItemPoint label={'Length'} value={'length'}/>
                        <ItemPoint label={'Crew'} value={'crew'}/>
                        <ItemPoint label={'Passengers'} value={'passenders'}/>
                        <ItemPoint label={'Cargo Capacity'} value={'cargoCapacity'}/>
                    </ItemDetails>
                }
            />            
        )
};
export default StarshipPage;