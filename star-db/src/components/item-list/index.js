import React from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';

export default class ItemList extends React.Component {
    swapiService = new SwapiService();
    
    state = {
        peopleList: []
    };

    componentDidMount() {
        this.swapiService
        .getAllPeople()
        .then((peopleList)=>{
            this.setState({
                peopleList
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
        const {peopleList} = this.state;
        // if (!peopleList) {
        //     return <Spin/>
        // }
        const items = this.renderItem(peopleList)
        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        )
    }
};
