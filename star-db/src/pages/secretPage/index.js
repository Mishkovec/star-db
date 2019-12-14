import React from 'react';

const SecretPage = ({isLoggedIn}) => {

    if(isLoggedIn) {
        return (            
            <div className='row mb2'>
                <h3>SecretPage</h3>                
            </div>
        )
    }

    return <p>You should not see this page</p>
};
export default SecretPage;