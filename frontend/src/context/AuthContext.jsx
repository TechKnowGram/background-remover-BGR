import React, { createContext, useContext, useState } from 'react';


// create auth context
const AuthContext = createContext();


// auth provider
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;

    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useState(() => {
        if (user) {
            setIsAuthenticated(true);
        }
    }, [user]);

    // login function
    const login = (userData) => {
        console.log(userData);
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    // logout function
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('auth_token');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

};

// custom hook for using auth context
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };