import { useState } from 'react';
import UserContext from './UserContext'
import { useNavigate } from 'react-router'

const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (userCredentials) => {
        async function postLogin() {
            let response;
            try {
                response = await fetch("http://localhost:8000/api/v1/auth/client-login", {
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
