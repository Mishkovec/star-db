import React from 'react';
import {Button} from 'antd'; 

const LoginPage = ({isLoggedIn, onLogin}) => {
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