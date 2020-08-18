import React from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';

const Home = () => {
    const token = localStorage.getItem('auth_token');

    return (
        <>
            {token ?
                <>
                    <Button href='/contacts'>Contacts</Button>
                    <Button href='/jobs'>Jobs</Button>
                </>
                :
                <LoginForm />
            }
        </>
    )
}

export default Home;