import { useState } from 'react';
import UserContext from './UserContext'
import { useNavigate } from 'react-router'
import { API } from '../config'

const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (userCredentials) => {
        async function postLogin() {
            let response;
            try {
                response = await fetch(`${API}/auth/client-login`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, method: 'POST', body: JSON.stringify(userCredentials)
                })
                let data = await response.json()

                setUser(data);

                navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
        postLogin();

    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;
