import React from 'react';
import styles from './planetPage.module.css';
import ItemList from '../../components/item-list';
import PlanetDetails from '../../components/planet-details';

const PlanetPage = (props) => {
        return (
            <div className={styles.page_wrapper}>
                <div className={styles.left_block}>
                    <ItemList 
                        onItemSelected={props.onItemSelected}
                        getData={props.getData}                    
                    />
                </div>
                <div className={styles.right_block}>
                    <PlanetDetails Id={props.Id}/>
                </div>
            </div>
        )
};
export default PlanetPage;
