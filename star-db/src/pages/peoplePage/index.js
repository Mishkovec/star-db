import React from 'react';
// import './personPage.css';
import ItemList from '../../components/item-list';
import PersonDetails from '../../components/person-details';
import {withRouter} from 'react-router-dom';

const PeoplePage = ({history}) => {    
        return (
            <ItemList onItemSelected={(Id)=>{
                history.push(Id)
            }}/>
        )
};
export default withRouter(PeoplePage);
