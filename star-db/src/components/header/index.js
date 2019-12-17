import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header_wrapper}>
                <h3>
                    <Link to='/'>
                        Star DB
                    </Link>
                </h3>
                <ul className={styles.header_items}>
                    <li>
                        <Link to='/people/'>People</Link>
                    </li>
                    <li>
                        <Link to='/planets/'>Planets</Link>
                    </li>
                    <li>
                        <Link to='/starships/'>Starships</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/secret'>Secret</Link>
                    </li>
                </ul>
            </div>
        );
    }
};
