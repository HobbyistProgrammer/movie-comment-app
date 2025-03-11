import React, { useState } from 'react'; 
import './RegisterForm.css';

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {

    };

    return (
        <div className='wrapper'>
            <h1>Register</h1>
            <form action={handleRegister}>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='First Name' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='Last Name' 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='User Name' 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;