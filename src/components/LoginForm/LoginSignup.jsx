import React, { useState } from 'react';
import { useNavigate, userNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";

import { collection, getDocs, addDoc} from 'firebase/firestore';
import { serverTimestamp } from '@firebase/firestore'
import { db } from '../../utils/firebase';

import bcrypt from 'bcryptjs';

import './LoginSignup.css';

const LoginSignup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        
        var isUser = false;
        
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.get("firstname")}`);
            if(doc.get("username") === username) {
                if(bcrypt.compareSync(password, doc.get("password"))){
                    isUser = true;
                    // console.log("User is authenticated");
                }
            }
        });

        isUser ? navigate("movies") : console.log("User does not exist");
        
    }

    const addUser = async () => {

        // Encrypts user password using Bcryptjs.
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("temp123", salt);

        const usersCollection = collection(db, "users");
        const newUser = {
            firstname: "John",
            lastname: "Doe",
            email: "temp123@gmail.com",
            password: hash,
            createdAt: serverTimestamp()
        }  
        await addDoc(usersCollection, newUser);
    }

    return (
        <div className='wrapper'>
            <form action={handleLogin}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <FaUser className='icons'/>
                </div>
                <div className='input-box'>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icons'/>
                </div>

                <div className="remember-password">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;