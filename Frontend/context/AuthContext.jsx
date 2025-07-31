import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);


    // Check if user is authenticated and if socket,set the user data and connect the socket
    const checkAuth = async () => {
        try {
            if(!token) return false;
            const { data } = await axios.get("/api/auth/check");
            if (data.success) { 
                setAuthUser(data.user)
                connectSocket(data.user)
                return true;
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            checkAuth();
        }
    }, [token]);


    // Login function to handle user authentication and socket connection
    const login = async (state, credentials) => {
        try {
            const { data } = await axios.post(`/api/auth/${state}`, credentials);
            if (data.success) {
                // Add artificial delay for better UX
                await new Promise(resolve=>setTimeout(resolve,3000));
                localStorage.setItem("token", data.token);
                setToken(data.token);

                axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
                setAuthUser(data.userData);
                connectSocket(data.userData); 
                toast.success(data.message);
                return true;
            } else {
                toast.error(data.message)
                return false;
            }
        } catch (error) {
            console.error("Login error:", error);
            // toast.error(error.message)
            toast.error(error.response?.data?.message || error.message);
            return false;
        }
    };


    // Logout function to handle user logout and socket disconnection
    const logout = async () => {
        localStorage.removeItem("token");
        setToken(null);
        setAuthUser(null);
        setOnlineUsers([]);
        axios.defaults.headers.common["token"] = null;
        toast.success("Logged out Successfully");
        socket.disconnect();
    }

    // Update profile function to handle user profile updates
    const updateProfile = async (body) => {
        try {
            const { data } = await axios.put("/api/auth/update-profile", body);
            if (data.success) {
                setAuthUser(data.user);
                toast.success("Profile Updated Successfully")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Connect socket function to handle socket connection and online users updates
    const connectSocket = (userData) => {
        if (!userData || socket?.connected) return;
        const newSocket = io(backendUrl, {
            query: {
                userId: userData._id,
            }
        });
        newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getonlineUsers", (userIds) => {
            setOnlineUsers(userIds);
        })
    }

    const value = {
        axios,
        authUser,
        onlineUsers,
        socket,
        login,
        logout,
        updateProfile,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
