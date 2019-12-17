import React from 'react';
import styles from './peoplePage.module.css';
import ItemList from '../../components/item-list';
import PersonDetails from '../../components/person-details';
import {withRouter} from 'react-router-dom';

const PeoplePage = ({getData,history}) => {    
        return (
            <div className={styles.page_wrapper}>
                <ItemList 
                    onItemSelected={(Id)=>{
                        history.push(Id)
                    }}
                    getData={getData}  
                />
            </div>             
        )
};
export default withRouter(PeoplePage);
