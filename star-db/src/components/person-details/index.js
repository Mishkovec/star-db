import React from 'react';
import './person-setails.css';

export default class PersonDetails extends React.Component {
    render() {
        return (
            <div className='person-details card'>
                <img className='person-image'/>
                <div className='card-body'>
                    <h4>R2</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Gender</span>
                            <span>male</span>                        
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};
