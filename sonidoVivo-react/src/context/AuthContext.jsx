import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsAuthenticated(!!token)
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token)
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("carrito-de-compras")
        setIsAuthenticated(false)
    }

    return <AuthContext.Provider value={{isAuthenticated, login, logout}}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth };