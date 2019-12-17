import React from 'react';
import {Button} from 'antd'; 
import {Redirect} from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogin}) => {
    if(isLoggedIn) {
        return <Redirect to='/'/>
    }
    return (
        <div>
            <p>Login please!</p>
            <Button
                onClick={onLogin}
            >
                Login
            </Button>
        </div>
    )  
}
export default LoginPage;