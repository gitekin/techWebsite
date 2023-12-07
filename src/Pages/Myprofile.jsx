import React, { useState } from 'react';
import './MyprofileStyle.css';

const AuthPage = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div className="auth-container">
            <div className="toggle-buttons">
                <button onClick={() => setIsLoginView(true)} disabled={isLoginView}>Login</button>
                <button onClick={() => setIsLoginView(false)} disabled={!isLoginView}>Register</button>
            </div>

            {isLoginView ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                // Handle login success (e.g., redirecting the user, storing auth token)
            } else {
                // Handle errors (e.g., displaying a message to the user)
                console.error(data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, dob, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                // Handle registration success (e.g., redirecting to login page, showing success message)
            } else {
                // Handle errors (e.g., displaying a message to the user)
                console.error(data.message);
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
};

export default AuthPage;
