import React from 'react';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <span>BOOM!</span>
            <span>something has gone terrible wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;