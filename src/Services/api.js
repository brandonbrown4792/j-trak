const DEV_URL = 'http://localhost:3000/api/v1';
const PROD_URL = 'TBD'; // To be used if deployed
const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL

export function login(usernameEmail, password) {
    const token = localStorage.getItem('auth_token');

    if (!token) {
        alert('Must be logged in to get contacts')
        return;
    }

    const userObj = {
        user: {
            username_email: usernameEmail,
            password: password
        }
    }

    const fetchObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Auth-Token': token
        },
        body: JSON.stringify(userObj)
    }

    fetch(`${API_ROOT}/login`, fetchObj)
        .then(res => res.json())
        .then(tokenResponse => {
            if (tokenResponse.message) {
                alert(tokenResponse.message);
            } else {
                localStorage.setItem('auth_token', tokenResponse.token)
            }
        });
}