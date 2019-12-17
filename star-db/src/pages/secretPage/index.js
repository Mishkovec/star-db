import React from 'react';
import {Redirect} from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {

    if(isLoggedIn) {
        return (            
            <div className='row mb2'>
                <h3>SecretPage</h3>                
            </div>
        )
    }

    return <Redirect to='/login'/>
};
export default SecretPage;