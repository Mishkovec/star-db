import React from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import {Spin} from 'antd';

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
                    className='list-group-item list'
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
        // if (!itemList) {
        //     return <Spin/>
        // }
        const items = this.renderItem(itemList)
        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        )
    }
};
