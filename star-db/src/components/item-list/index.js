import React from 'react';
import SwapiService from '../../services/swapi-service';
import {Spin} from 'antd';
import styles from'./item-list.module.css';

export default class ItemList extends React.Component {    
    state = {
        itemList: []
    };

    componentDidMount() {
        const {getData}= this.props;
        getData()
        .then((itemList)=>{
            this.setState({
                itemList
            });
        });
    }

    renderItem(arr) {
        return arr.map(({id,name})=>{
            return (
                <li 
                    className={styles.list_item}
                    key={id}
                    onClick = {()=> this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }

    
    render() {
        const {itemList} = this.state;
        if (itemList.length==0) {
            return <Spin/>
        }
        const items = this.renderItem(itemList)
        return (
            <ul className={styles.list_items}>
                {items}
            </ul>
        )
    }
};
