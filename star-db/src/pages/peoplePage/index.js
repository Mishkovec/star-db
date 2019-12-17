import React from 'react';
// import './personPage.css';
import ItemList from '../../components/item-list';
import PersonDetails from '../../components/person-details';
import {withRouter} from 'react-router-dom';

const PeoplePage = ({getData,history}) => {    
        return (
            <ItemList 
                onItemSelected={(Id)=>{
                    history.push(Id)
                }}
                getData={getData}  
            />
        )
};
export default withRouter(PeoplePage);
